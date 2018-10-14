const express = require('express');
const parser = require('body-parser');
const connection = require('../database/connection.js');


const app = express();
const port = 3000;

//parsing to request body
app.use(parser.json());
// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// Serve the client files
app.use(express.static(__dirname + '/../client')); // serves any static requests

//CORS
app.options('/', (req, res) => {
	res.set({
		'Access-Control-Allow-Origin': '*'
	})
	res.end();
})



app.get('/', (req, res) => {
	connection.query(`seelect * from table`, (error, results, fields) => {
		if(error) {
      response.status(500).end(error.message);
    }
		res.send('Hello World! Got a GET request', results);
	})

app.post('/', (req, res) => {
	var query = `insert .. into table`;		// "${request.body.movie}" inside the back ticks
	var value = [request.body.movie];	
	connection.query(query, value, (error, results, fields) => {
		if(error) {
      response.status(500).end(error.message);
    }
  	res.send('Got a POST request')
	})
});


app.listen(port, () => console.log(`Server app listening on port ${port}!`))


// app.put('/', (req, res) => res.send('Got a PUT request at /user'));

// app.delete('/', (req, res) => res.send('Got a DELETE request at /user'));