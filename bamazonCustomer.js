/*

Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

*/

const mysql = require("mysql");
const inquirer = require("inquirer");
require("dotenv").config();

//data needed to create connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "bamazon"
});

//create connection to database w/ connect
connection.connect(function(err) {
    if (err) throw err;
    run();
});

//start application
function run() {
    //inquirer: 1. ask for id they'd like to buy, 2. how many units they'd like to buy
}

//take response and check if your store has enough of the product to meet the customer's request.


//if yes, update sql database and reflect remainig quantify adn then show the total cost of their order
//else, doesn't run and log "Insufficient quantity"
