import { MongoClient } from "mongodb";

async function handler(req, res) {
    // POST /api/new-meetup
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PWD}@cluster0.o0xro.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`
        );
        const db = client.db();

        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        res.status(201).json({ message: "Meetups Inserted." });
    }
}

export default handler;
