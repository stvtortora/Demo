const mysql = require('mysql');

const newConnection = async () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: "demo_db"
    });
    try {
        await connection.connect((err) => {
            if (err) {
                throw err;
            }      
        
            console.log('connected as id ' + connection.threadId);
        });
    
        return connection;
    } catch (err) {
        console.log(`Error connecting to db: ${err}`);
        throw new Error("Error connecting to db");
    } 
};

module.exports = {
    newConnection
};
