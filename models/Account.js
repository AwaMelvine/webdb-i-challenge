import db from '../data/dbConfig';

module.exports = {
    get() {
        return db('accounts');
    }
}