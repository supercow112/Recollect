const db = require("./db");
// we should do this in the same place we've set up express-session
const session = require("express-session");

// configure and create our database store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so that our session table gets created
dbStore.sync();

// plug the store into our session middleware
module.exports = session({
  secret: process.env.SESSION_SECRET || "XDSfkjd02308ksdfaDF",
  store: dbStore,
  resave: false,
  saveUninitialized: false,
});
