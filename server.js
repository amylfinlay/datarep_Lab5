/**Amy Finlay
 * G0060784
 * Lab 5
 */

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Displays onto webpage the sentence when page is requested
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying!');
})

//API that sends text back
app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name)
    res.send('Hello ' + req.params.name);
})

//API which responsed with JSON data 
app.get('/api/movies', (req, res)=>{
    const myMovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies:myMovies});
});

//Calls html file to be displayed on request
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');

})

//URL includes values inputted (fname, lname)
app.get('/name', (req, res)=> {
    res.send('Hello ' + req.query.fname +' '+ req.query.lname);

})

//URL will not change with Post method
app.post('/name', (req, res)=> {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

//Port in which url is waiting for request
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})