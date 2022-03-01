import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
    return (
        <>
            <Head>
                <title>React Meetups | {props.data.title}</title>
                <meta name="description" content={props.data.description} />
            </Head>
            <MeetupDetail
                image={props.data.image}
                title={props.data.title}
                address={props.data.address}
                description={props.data.description}
            />
        </>
    );
};

export const getStaticProps = async (ctx) => {
    const meetupId = ctx.params.meetupId;
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PWD}@cluster0.o0xro.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });
    client.close();

    return {
        props: {
            data: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PWD}@cluster0.o0xro.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString(),
            },
        })),
        fallback: "blocking",
    };
};

export default MeetupDetailPage;
