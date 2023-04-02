var mysql = require('mysql');

var con = mysql.createConnection({
  host: "squadly-db-test.cidm8l1lwtjk.us-east-2.rds.amazonaws.com",
  user: "reader",
  password: "iamreader.123!"  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // const sql= "SELECT count(*) from identity.user" ;
  const sql= " SELECT name, email, createdAt, active FROM identity.user WHERE `createdAt`  >= DATE_SUB(CURDATE(),  INTERVAL 1 month) AND active='1' " ;
  
  con.query(sql, function (err1, result) {
    if (err1) throw err1;
    // console.log("Result: " + result);
    console.log(JSON.stringify(result))
  });
  con.end();
});

              
