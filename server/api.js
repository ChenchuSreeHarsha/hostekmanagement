const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
const connectingStringIrl = 'mongodb://localhost:27017';
const app = express();
const client = new MongoClient(connectingStringIrl,{family:4});
const dbName = 'HostelMangement';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/roommanagement',async(req,res)=>{
    try {
        await client.connect();
        const db = client.db(dbName)
        const collection = db.collection('RoomManagement')
        const roomData = {
            roomNumber : req.body.roomNumber,
            sharing : req.body.sharing,
            isActive : (req.body.isActive == true) ? true : false
        }
        await collection.insertOne(roomData)
        res.send('room is added')
    } catch (error) {
        res.send(error)
    }
})

app.post('/addnewhosteler',async(req,res)=>{
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('Hostelers');
        const hosteler = {
            name : req.body.name,
            fathername : req.body.fathername,
            mobileno : req.body.mobileno,
            email : req.body.email,
            address : req.body.address,
            workingname : req.body.workingname,
            roomno : req.body.roomno
        }
        await collection.insertOne(hosteler);
        res.send('hosteler is added')
    } catch (error) {
        res.send('error at adding new hosteler' + error)
    }
})

app.post('/edithosteler', async (req, res) => {
    const { mobileNumber } = req.body;
    try {
      console.log('Received mobile number:', mobileNumber);
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('Hostelers');
      const user = await collection.findOne({ mobileno: mobileNumber });
      if (user) {
        console.log('Hosteler found:', user);
        res.json(user);
      } else {
        console.log('Hosteler not found with mobile number:', mobileNumber);
        res.status(404).json({ message: 'Hosteler not found' });
      }
    } catch (error) {
      console.error('Error in /edithosteler:', error);
      res.status(500).send('Error at edit hosteler: ' + error);
    }
  });
  

app.listen(4000);
console.log('Server is running at port 4000');
