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

    async insert(account) {
        const [id] = await db('accounts').insert(account);
        return this.get(id);
    },

    async update(id, data) {
        const count = await db('accounts').where('id', id).update(data);
        return (count > 0 ? this.get(id) : null);
    },

    async remove(id) {
        const count = await db('accounts').where('id', id).del();
        return count;
    }
}