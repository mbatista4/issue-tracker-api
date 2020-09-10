if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Importing all requires libraries
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();
app.use(methodOverride('_method'));
app.use(express.json());

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'));


const itemRouter = require('./routes/items');
app.use('/', itemRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`started server at port ${PORT}`));