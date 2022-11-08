const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { query } = require('express');
const app = express();
const port = process.env.PORT || 5000;


// id: user4
// pass: wU0VyrI7833RCBc8

//middleware
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://user4:wU0VyrI7833RCBc8@cluster0.ltjdg3f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run(){

    try{

         const serviceCollection = client.db('ServiceCollection').collection('services');

        //  app.get('/addservices', async(req, res)=>{
        //      const query = {};
        //      const cursor = serviceCollection.find(query);
        //      const services = await cursor.toArray();
        //      res.send(services);

        // });


         app.post('/addservices', async(req, res) =>{
             const service = req.body;
             console.log(service); 
             const result = await serviceCollection.insertOne(service);
             res.send(result);
         });


        // app.get('/users/:id', async(req, res) =>{
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id)}
        //     const result = await userCollection.findOne(query);
        //     res.send(result);
         //})
  
    }

    finally{

    }

}

run().catch(err => console.log(err));





app.get('/', (req, res) =>{
    res.send('Hello from easy service server');
})

app.listen(port, ()=>{
    console.log(`listinting to potr ${port}`);
})