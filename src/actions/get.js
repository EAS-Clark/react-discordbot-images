
const Promise = require('promise');
const mysql = require('mysql');


module.exports = function (connection) {

    return new Promise((resolve, reject) => {
        console.log("hello");

        connection.query(`SELECT * FROM image_HTML_URl`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            console.log(result);
            resolve({ "status": "success", "status_message": "sending back image", "discord_message": + result[0].HTML_URL });
        });
    })

}