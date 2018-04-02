// ./routes/user.js
const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    models.User.findAll().then(result => {
        if (result && result.length > 0) {
            res.json(result);
        } else {
            res.status(204);
            res.send();
        }
    }).catch(err => {
        res.status(409);
        res.json(err);
    });
});

router.get('/:id', (req, res) => {
    models.User.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (result) {
            res.json(result);
        } else {
            res.status(204);
            res.send();
        }
    }).catch(err => {
        res.status(409);
        res.json(err);
    });
});

router.post('/', (req, res) => {
    models.User.create({
        username: req.body.username,
        email: req.body.email
    }).then(result => {
        res.status(201);
        res.send(result);
    }).catch(err => {
        res.status(409);
        res.send(err);
    });
});

router.put('/:id', (req, res) => {
    models.User.update({
        username: req.body.username,
        email: req.body.email
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.status(204);
        res.json(result);
    }).catch(err => {
        res.status(409);
        res.json(err);
    });
});

router.delete('/:id', (req, res) => {
    models.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(result=> {
        res.status(204);
        res.json(result);
    }).catch(err => {
        res.status(409);
        res.json(err);
    });
});

module.exports = router;