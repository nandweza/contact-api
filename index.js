const express = require('express');

const app = express();

const contactRoutes = require('./routes/contactRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use('/api/contact/', contactRoutes);


module.exports = app;
