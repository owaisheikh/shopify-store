
class Database {
    
    constructor(mysqlConfig) {
        const mysql = require('mysql2');
        this.pool = mysql.createPool(mysqlConfig);
    }
    
    async ping() {
        return new Promise((resolve, reject) => {
            this.pool.query('SELECT 1', (error, result) => {
                if (error) {
                    return reject(error);
                }
                else {
                    return resolve(true);
                }
            });
        });
    }
    
    async getStores() {
        return new Promise((resolve, reject) => {
            this.pool.query('SELECT * from stores', (error, result) => {
                if (error) {
                    return reject(error);
                }
                else {
                    return resolve(result);
                }
            });
        });
    }
}

module.exports = Database;