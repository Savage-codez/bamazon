// connet dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

// connect database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "9212",
    database: "bamazonDB"

});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // run the start function after the connection is made to prompt the user
    start();
});
// log all items on start of app
function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        itemBuy();
    });
}

function itemBuy() {
    inquirer
        .prompt([{
            name: "productID",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }

        },
        {
            name: "stock",
            type: "input",
            message: "How many would you like?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }

        }
        ])




        .then(function (answer) {
            connection.query("SELECT stock FROM products WHERE itemID = ?", [answer.productID], function (err, res) {
                if (answer.stock > res[0].stock) {
                    console.log("Not enough stock!");
                    itemBuy();
                } else {
                    var newStock = res[0].stock - answer.stock;
                    connection.query("SELECT * FROM products WHERE itemID = ?", [answer.productID], function (err, res) {
                        var showPrice = res[0].price;
                        console.log(`Your item was $${showPrice}`);
                        console.log('Congrats on your purchase!');

                    })




                }
            })
        })
}






