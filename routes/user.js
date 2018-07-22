// ./routes/user.js
const models = require('../models');
const express = require('express');
const router = express.Router();

router.post('/search', (req, res) => {
    let constant = {};
    if (req.body.userId !== undefined && req.body.userId !== '') {
        constant = {
            where: {
                userId: req.body.userId
            }
        };
    }
    models.User.findAll(constant).then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        res.status(400);
        res.send(err);
    });
});

router.post('/create', (req, res) => {
    models.User.create({
        username: req.body.username,
        email: req.body.email
    }).then(result => {
        res.status(200);
        res.send('success');
    }).catch(err => {
        res.status(400);
        res.send(err);
    });
});

router.post('/update', (req, res) => {
    models.User.update({
        username: req.body.username,
        email: req.body.email
    },
    {where: {
        userId: req.body.userId
    }}).then(result => {
        res.status(200);
        res.send('success');
    }).catch(err => {
        res.status(400);
        res.send(err);
    });
});

router.post('/delete', (req, res) => {
    models.User.update({
        where: {
            userId: req.body.userId
    }}).then(result => {
        res.status(200);
        res.send('success');
    }).catch(err => {
        res.status(400);
        res.send(err);
    });
});

module.exports = router;