var express = require('express');

var router = express.Router();

var burger = require('./../models/burger');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj);
    });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body.name);
    burger.insertOne('burger_name', [req.body.name], function(result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put('api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    console.log('condition', condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;