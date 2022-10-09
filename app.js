const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

//Routes
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/dist/index.html')); });

app.listen(PORT, error => {
    error ? (error) : console.log(`Server is running on port ${PORT}`);
})