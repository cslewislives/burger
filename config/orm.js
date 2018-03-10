var con = require('./connection');

var orm = {
    selectAll: function(table, cb) {
        let query = 'SELECT * FROM ' + table + ';';
        con.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        let query = 'INSERT INTO ' + table + ' (' + column + ') VALUE ("' + value + '");';
        //query = 'INSERT INTO ? SET ?' [tableName, valuesObject]
        //{column1: val1, column2: val2}
        //column1 = val1, column2 = val2
        con.query(query, value, function(err, result) {
            if (err) throw err;
            console.log('here');
            cb(result);
        });
    },
    updateOne: function(table, colVal, condition, cb) {
        let query = 'UPDATE ' + table + ' SET ' + colVal + ' WHERE ' + condition + ';';
        con.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;