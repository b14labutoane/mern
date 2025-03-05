import {MongoClient, ServerApiVersion} from "mongodb";

const uri = process.env.ATLAS_URI || "";
console.log(uri);
const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    },
});

try{
    await client.connect();
    await client.db("admin").command({ping:1});
    console.log(
        "Pinged your deplowment. You successfully connected to MongoDB!"
    );
} catch(err){
    console.error(err);
}

let db = client.db("employees");

export default db;