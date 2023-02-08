const db = require("./db/db");

const constructPromiseFromQuery = query => {
    return new Promise((resolve, reject) => {
      db.execute(query, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      })
    })
}

module.exports = constructPromiseFromQuery;

