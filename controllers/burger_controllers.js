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
    console.log(req.body.burger_name);
    burger.insertOne('burger_name', [req.body.burger_name], function(result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    let devoured = ('devoured = ' + req.body.devoured)
    burger.updateOne(devoured, [condition], function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            console.log('Burger has been devoured.');
            res.status(200).end();
        }
    });
});

module.exports = router;