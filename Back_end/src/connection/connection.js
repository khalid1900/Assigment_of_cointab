import mysql from "mysql2";

const connetion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Khan@1900",
  database: "userdata",
});

connetion.connect((err) => {
  if (err) throw err;
 
  console.log("Connected!!!!!!");
});

export { connetion };
