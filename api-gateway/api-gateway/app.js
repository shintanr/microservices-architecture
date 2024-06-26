require('dotenv').config(); 
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/course');
const mediaRouter = require('./routes/media');
const orderRouter = require('./routes/order');
const paymentRouter = require('./routes/payment');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/course', courseRouter);
app.use('/media', mediaRouter);
app.use('/order', orderRouter);
app.use('/payment', paymentRouter);

module.exports = app;
