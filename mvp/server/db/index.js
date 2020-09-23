const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'movie_search'
});

dbConnection.connect(err => {
    if(err) {
        console.log(err, 'an error you are not conected')
    } else {
        console.log('you are conected!!!');
    }
})

module.export = dbConnection;