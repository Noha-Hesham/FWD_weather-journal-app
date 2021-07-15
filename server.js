// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Start up an instance of app
const port = 6060;

function listening() {
    const serverR= 'server runing';
    const serverP= `running on localhost: ${port}`;
    console.log(serverR);
    console.log(serverP);
};
function myServer(callback) {
    const server = app.listen(port, listening);
    callback(server)
};
 myServer((result)=> {
    // console.log(result)
 });

// Setup Server

//get rout to return projectData object

app.get('/', sendData);

function sendData (req, res) {
  res.send(projectData);
  console.log(projectData);
};

//post route to add data to projectData


const data = [];
app.post('/', callBack);

function callBack(req,res){
  data.push(req.body);
  console.log(data);
}
