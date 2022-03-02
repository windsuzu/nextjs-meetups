import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
    let content;

    if (!props.meetupList || props.meetupList.length === 0) {
        content = <p style={{ textAlign: "center" }}>No Meetups...</p>;
    } else {
        content = <MeetupList meetups={props.meetupList} />;
    }

    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse highly active React meetups!"
                />
            </Head>
            {content}
        </>
    );
};

export const getServerSideProps = async () => {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PWD}@cluster0.o0xro.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const collection = db.collection("meetups");
    const meetups = await collection.find().toArray();
    client.close();

    return {
        props: {
            meetupList: meetups.map((meetup) => ({
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
            })),
        },
    };
};

export default HomePage;
