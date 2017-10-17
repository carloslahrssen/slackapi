const mysql = require('mysql');
const fs = require('fs');
const connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:'testDNA',
	port:3306,
});

connection.connect((err)=>{
	if(err)throw err;
	console.log("CONNECTED");
});

connection.query('SELECT*FROM testDNA.employees',(err,results,fields)=>{
	if(err) throw err;

	fs.writeFile('table.json', JSON.stringify(results),(err)=>{
		if(err) throw err;
		console.log('Saved');
	});

	connection.end();
});