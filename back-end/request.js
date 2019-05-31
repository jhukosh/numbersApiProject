const request = require('request');

module.exports = {
    /* method to call external API */
    calling_API : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err);
              resolve(body);
            });
        })
    }
}