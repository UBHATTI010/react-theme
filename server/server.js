const express = require('express')
var mysql = require('mysql');
var cors= require('cors');

const app = express()
app.use(cors())


app.post("/active/users" , (req, res) => {
    
    // build connection; run query; get results; close connection
        
    var con = mysql.createConnection({
      host: "squadly-db-test.cidm8l1lwtjk.us-east-2.rds.amazonaws.com",
      user: "reader",
      password: "iamreader.123!"  
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      const sql= " SELECT count(*) FROM identity.user WHERE `createdAt`  >= DATE_SUB(CURDATE(),  INTERVAL 1 month) AND active='1' " ;
      
      con.query(sql, function (err1, result) {
        if (err1) throw err1;
        res.json(result)

            console.log(JSON.stringify(result))
      });
      con.end();
    });

})

app.listen(5000, () => { console.log("Server started on port 5000")});