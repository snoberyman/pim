require('dotenv').config()
const express = require('express');
const collectionRoutes = require('./routes/collections')
const userRoutes = require('./routes/users')
const mongoose = require('mongoose')
// Express app
const app = express()

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/collections', collectionRoutes);
app.use('/api/users', userRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB and Listening on Port ${process.env.PORT}!`);
        });
    })
    .catch((error) => {
        console.error(error)
    })

