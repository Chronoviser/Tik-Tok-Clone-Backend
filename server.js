import express from 'express';
import mongoose from 'mongoose';
import posts from './dbModel.js';
import Cors from 'cors';

//App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json())
app.use(Cors());

// Database Config
const connection_url = "mongodb+srv://admin:admin@cluster0.mjral.mongodb.net/tiktokclonedb?retryWrites=true&w=majority"
mongoose.connect(connection_url, err => {
    if (err) throw err;
    else console.log('connected to MongoDB');
})

// API Endpoints
app.get('/', (req, res) => { res.status(200).send('Tik Tok Backend is Working') })

// app.get('/posts', (req, res) => { res.status(200).send(data) })
app.get('/posts', (req, res) => {
    posts.find((err, data) => {
        if (err) {
            response.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/posts', (req, res) => {
    const dbPosts = req.body;

    posts.create(dbPosts, (err, data) => {
        if (err) {
            response.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })

})

// Listener
app.listen(port, () => console.log(`listening on localhost:${port}`))