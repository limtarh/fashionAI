import {useState} from 'react';
require('dotenv').config()

const tf  = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');
const mysql = require('mysql2')
console.log('Connected to PlanetScale!')
const connection = mysql.createConnection(process.env.DATABASE_URL)
connection.end()

async function runQuery(query) {
    
    
    /*
    console.log('Connected to PlanetScale!')


    connection.query(

  "SELECT * FROM `inventory`",

  function(err, results, fields) {

    console.log(err);

    console.log(results); // results contains rows returned by server

    console.log(fields); // fields contains extra meta data about results, if available

  })
  */
    //connection.end()
    return use.load().then(m => m.embed([query])).then((e) => tf.matMul(e,e,false,true)) ;
}
 
export default runQuery ;