const db = require('../data/dbConfig');

module.exports = {
    get() {
        return db('accounts');
    },

    insert(account) {
        return db('accounts')
            .insert(account)
            .then(([id]) => id);
    }
}