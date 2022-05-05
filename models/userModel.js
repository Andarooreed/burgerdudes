const Datastore = require("nedb");

class UserDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            //embedded
            this.db = new Datastore({
                filename: dbFilePath,
                autoload: true
            });
        } else {
            //in memory
            this.db = new Datastore();
        }
    }
    // Default is Admin / Admin
    init() {
        this.db.insert({
            user: 'Admin',
            password:
                '$2a$10$SAf0PDtcxqVWbOETzSc5IewingujkAVLp8PeRk/z0ss6Ns8FYImKm'
        });
        return this;
    }

    lookup(user, cb) {
        this.db.find({ 'user': user }, function (err, entries) {
            if (err) {
                return cb(null, null);
            } else {
                if (entries.length == 0) {
                    return cb(null, null);
                }
                return cb(null, entries[0]);
            }
        });
    }
}
const dao = new UserDAO();
dao.init();

module.exports = dao;