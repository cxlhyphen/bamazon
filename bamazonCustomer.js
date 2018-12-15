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

//create connection to database w/ connect and run app
connection.connect(function (err) {
    if (err) throw err;
    run();
});

//functions
let startOver = function() {
    inquirer.prompt([
        {
            type: "list",
            name: "restart",
            message: "Would you like to return to the main menu?",
            choices: ["Yes", "No, exit."]
        }
    ]).then(function(restart) {
        if (restart.restart === "No, exit.") {
            process.exit();
        } else {
            run();
        }
    });
};

let run = function () {
    //make query to display all items and info
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.log(`\nWelcome to bamazon. Here are our current product listings:\n`);

        for (let i = 0; i < res.length; i++) {
            console.log(`ID#: ${res[i].item_id} || Product Name: ${res[i].product_name} || Price: $${res[i].price}\n`);
        };
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Purchase Items", "Exit"]
            }
        ]).then(function (choice) {
            if (choice.choice === "Exit") {
                process.exit();
            }
            order(res);
        });
    });
}

let order = function (res) {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the ID number of the item you're trying to purchase?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(function (answer) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].item_id == answer.id) {
                let id = res[i].item_id;
                let stock = res[i].stock_quantity;
                let price = res[i].price;
                inquirer.prompt([
                    {
                        type: "input",
                        name: "quantity",
                        message: "How many units would you like to purchase?",
                        validate: function (value) {
                            if (isNaN(value) === false) {
                                return true;
                            } else {
                                return false;
                            }
                        }

                    }
                ]).then(function (answer) {
                    if ((stock - answer.quantity) >= 0) {
                        connection.query(
                            "UPDATE products SET stock_quantity='" + (stock - answer.quantity) + "' WHERE item_id='" + id + "'",
                            function (err) {
                                if (err) throw err;
                                console.log("Your order has been processed. Your total was: $"+(answer.quantity * price));
                                startOver();
                            });
                    } else {
                        console.log("Sorry, we currently do not have that many units.");
                        startOver();
                    }

                });
            }
        };
    });
};

