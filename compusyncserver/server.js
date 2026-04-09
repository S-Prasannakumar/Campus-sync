const express = require('express');
const cors = require('cors');
const myschema = require('./compusyncdatabase/modal');  
const mysql2 = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from ramya");
    res.end();
});




// leave 
    
app.post("/leave", async(req,res)=>{
    try{
        const { ltype, sdata, edata, lreason } = req.body;
        const fdata = [ltype, sdata, edata, lreason];
        console.log("Received leave application:", fdata);
        if (!ltype || !sdata || !edata || !lreason) {
            console.log("Missing fields in leave application:");
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        else{
            const myquery = "INSERT INTO leavetable (ltype, sdata, edata, lreason) VALUES (?, ?, ?, ?)";
            myschema.query(myquery, fdata, (err, result) => {
                if (err) {
                    console.error('Error inserting leave application:', err);
                    res.status(500).json({ error: 'Failed to submit leave application' });
                } else {
                    console.log('Leave application submitted successfully:', result);
                    res.status(200).json({ message: 'Leave application submitted successfully' });
                }
            });
        }
    }
    catch(err){
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            res.status(500).json({ error: 'Database connection error' });
        }
    }
});




// od

app.post("/OD", async(req,res)=>{
    try{
        const { odtype, oddate, odreason } = req.body;
        const fdata = [odtype, oddate, odreason];
        console.log("Received on-duty application:", fdata);
        if (!odtype || !oddate || !odreason) {
            console.log("Missing fields in on-duty application:");
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        else{
            const myquery = "INSERT INTO odtable (odtype, oddate, odreason) VALUES (?, ?, ?)";
            myschema.query(myquery, fdata, (err, result) => {
                if (err) {
                    console.error('Error inserting on-duty application:', err);
                    res.status(500).json({ error: 'Failed to submit on-duty application' });
                } else {
                    console.log('On-Duty application submitted successfully:', result);
                    res.status(200).json({ message: 'On-Duty application submitted successfully' });
                }
            });
        }
    }
    catch(err){
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            res.status(500).json({ error: 'Database connection error' });
        }
    }
});


// issues 

app.post("/issues", async(req,res)=>{
    try{
        const { issuetype, title, reason } = req.body;
        const fdata = [issuetype, title, reason];
        console.log("Received issue report:", fdata);
        if (!issuetype || !title || !reason) {
            console.log("Missing fields in issue report:");
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        else{
            const myquery = "INSERT INTO issuestable (issuetype, title, reason) VALUES (?, ?, ?)";
            myschema.query(myquery, fdata, (err, result) => {
                if (err) {
                    console.error('Error inserting issue report:', err);
                    res.status(500).json({ error: 'Failed to submit issue report    ' });
                } else {
                    console.log('Issue report submitted successfully:', result);
                    res.status(200).json({ message: 'Issue report submitted successfully' });
                }
            });
        }
    }
    catch(err){
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            res.status(500).json({ error: 'Database connection error' });
        }
    }
});




// Add this in your server file
app.get("/getleaves", (req, res) => {
    const myquery = "SELECT * FROM leavetable";
    
    myschema.query(myquery, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            // This sends the database rows back to your React app
            res.status(200).json(results);
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
