var orm = require('./../config/orm');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne('burgers', column, value, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVal, condition, cb) {
        orm.updateOne('burgers', colVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;