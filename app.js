const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/questions', (req, res) => {
    let questions = [
        {
            title: "what is node js?", 
            user: "John", 
            votes: "10"
        },
        {
            title: "what is js?", 
            user: "John", 
            votes: "10"
        },
        {
            title: "what is express js?", 
            user: "Mike", 
            votes: "8"
        },
        {
            title: "what is mongo db?", 
            user: "Paul", 
            votes: "6"
        }
    ]
    res.render('index', {questions:questions})
})


app.listen(3000, () => {
    console.log('listen on port 3000')
})