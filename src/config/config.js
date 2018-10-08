// 'use strict';
//
// module.exports = {
//     dialect: 'mysql',
//     database: 'test',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'root',
// };

module.exports = {
    development: {
        dialect: 'mysql',
        database: 'test',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        insecureAuth : true
    },
    test: {
        dialect: 'mysql',
        database: 'test',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        insecureAuth : true
    },
    production: {
        dialect: 'mysql',
        database: 'test',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        insecureAuth : true
    }
};