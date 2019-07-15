const db = require('../data/dbConfig');

module.exports = {
    get(id = null) {
        const query = db('accounts as a');
        if (id) {
            return query.where('a.id', id).first();
        } else {
            return query;
        }
    },

    insert(account) {
        return db('accounts')
            .insert(account)
            .then(([id]) => id);
    }
}