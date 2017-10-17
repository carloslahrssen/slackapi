require('dotenv').config('/');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/', (req, res)=>{
	let data = {
		response_type:'in_channel',
		text:'HELLO WORLD',
		channel_name:'#general'
	}
	res.json(data);
});

const server = app.listen(3000, ()=>{
	console.log("Listening on port 3000");
})