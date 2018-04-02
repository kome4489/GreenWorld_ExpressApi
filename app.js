const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const models = require('./models');
const user = require('./routes/user');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.use('/user', user);

app.use('/api', router);

models.sequelize.sync().then(() => {
    http.createServer(app).listen(port);
    console.log('listening');
});