const path = require('path');
const request = require("request");
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const publicDirectoryPath = (path.join(__dirname, '../public'));
app.use(express.static(publicDirectoryPath));

app.get('/about', (req, res) => {
    res.send([{ name: 'Andrew' }, { name: 'jitendra' }]);
})
app.get('/weather', (req, res) => {
    res.send({ location: 'delhi', forcast: 'normal' });
})
app.get('/help', (req, res) => {
    res.send('<h1>welcome, happy to</h1>');
})
app.listen(port, () => {
    console.log("app is running on the port" + port);
})