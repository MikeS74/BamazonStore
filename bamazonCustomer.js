//Required NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//Establishes connection to MySQL database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "FreshChoice1",
	database: "bamazon"
});

//Global variables for current product selected by user
var currentQty = 0;
var currentItem = "";
var qtyRequested = 0;
var currentPrice = 0;

//Searches database by product id number supplied by user through inquirer prompt
function productSearch() {
	inquirer
		.prompt({
			name: "item_id",
			type: "input",
			message: "What is the ID of the item you would like to buy?"
		})
		.then(function (answer) {
			var query = "SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?";
			connection.query(query, {
				item_id: answer.item_id
			}, function (err, res) {
				for (var i = 0; i < res.length; i++) {
					currentQty = res[i].stock_quantity;
					currentItem = res[i].product_name;
					currentPrice = res[i].price;
					console.log("Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: $" + res[i].price);
				}
				qtyDesired();
			});
		});
}
productSearch();

//Asks user the quantity they would like to buy of the current product selected
function qtyDesired() {
	inquirer
		.prompt({
			name: "qty_req",
			type: "input",
			message: "How many items would you like to buy?"
		})
		.then(function (answer) {

			qtyRequested = answer.qty_req;

			if (qtyRequested > currentQty) {
				console.log("Insufficient quantity!");
			} else {
				currentQty = currentQty - qtyRequested;
				updateProduct();
				shoppingTotal();
			}

		});
}

//Updates the stock quantity in MySQL database after qtyRequested is determined
function updateProduct() {
	var query = connection.query(
		"UPDATE products SET ? WHERE ?", [
			{
				stock_quantity: currentQty
       },
			{
				product_name: currentItem
       }
     ],
		function (err, res) {}
	);
}

//Gives the user their total based on qtyRequested multiplied by product price  
function shoppingTotal() {
	var newTotal = qtyRequested * currentPrice;
	console.log("Your total is $" + newTotal.toFixed(2));
}