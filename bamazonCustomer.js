/*
Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.
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
    //make query to display all items and info
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        let productArray = [];
        for (let i = 0; i < res.length; i++) {
            productArray.push(res[i]);
        };
        console.log(`\nWelcome to bamazon. Here are our current product listings:\n`);
        for (let i = 0; i <productArray.length; i++){
            console.log(`Item ID: ${productArray[i].item_id}`);
            console.log(`Product Name: ${productArray[i].product_name}`);
            console.log(`Price: $${productArray[i].price}`);
            console.log("----------------------");
        };
        order();
    });
}

function order() {
    //inquirer: 1. ask for id they'd like to buy, 2. how many units they'd like to buy
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the ID number of the item you're trying to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(function(answer) {
        //if your store has enough of the product to meet the customer's request, update sql database and reflect remainig quantify adn then show the total cost of their order
        // Once the update goes through, show the customer the total cost of their purchase.
        if (answer <= stock_quantity) {
    
            purchase();
    
        } else {
            //else, doesn't run and log "Insufficient quantity"
            console.log("Sorry, we currently do not have that many units.");
            run();
        }
    });
    
    }

function purchase() {
    console.log("purchase can go thru");
}