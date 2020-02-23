var mysql = require('mysql');
var request = require('request');

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
 
var connection = mysql.createConnection(
    {
      host     : '10.20.70.2',
      user     : 'carnaval',
      password : 'carnaval',
      database : 'scadaenlacesfo',
    }
);

function poolRequest(){

    var queryString = 'SELECT * FROM samaristafo limit 1';
    
    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
    
        for (var i in rows) {
            console.log(rows);

            var options = {
                uri: 'http://localhost:3000/news',
                method: 'POST',
                json: rows
            };
            
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("ENVIADO!")
            }
            });
        }
    });
}

setInterval(poolRequest, 3000);