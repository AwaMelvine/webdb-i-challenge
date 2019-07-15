const db = require('../data/dbConfig');

module.exports = {
    get() {
        return db('accounts');
    }
}