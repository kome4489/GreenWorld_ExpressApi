const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const models = require('./models');
const user = require('./routes/user');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.use('/user', user);

app.use('/api', router);

app.use(express.static('public'));

app.get('/public', function(req, res){
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  

models.sequelize.sync().then(() => {
    http.createServer(app).listen(port);
    console.log('listening');
});