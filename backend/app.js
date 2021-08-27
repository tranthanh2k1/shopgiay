const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Config
const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({ credentials: 'same-origin' }));
app.use(expressValidator());

// Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: false,
    createIndex: true
}).then(() => {
    console.log(`DB Connected`);
});
mongoose.connection.on('Error', err => {
    console.log(`DB connection error: ${err.message}`)
})

// Routes  Middlewares
app.use(morgan('dev'));
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 8000
// creat server
app.listen(port, () => {
    console.log(`Server is runing on port http://localhost:${port}`);
})