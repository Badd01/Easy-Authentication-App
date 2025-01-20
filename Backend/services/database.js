const Datastore = require("nedb-promises");

const users = Datastore.create("./users.txt");

module.exports = { users };
