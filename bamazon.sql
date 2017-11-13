DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript & JQuery", "Books", 24.99, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Carving Knife", "Home & Kitchen", 11.99, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("USB 3.0 Cable Cord", "Electronics", 5.50, 103);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Google Pixel Case", "Cell Phones & Accessories", 7.98, 196);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Flat Shoelaces", "Clothing, Shoes & Jewelry", 5.99, 88);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Queen Duvet Insert", "Home & Kitchen", 30.99, 37);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fruit of the Loom Cotton T-Shirt", "Clothing, Shoes & Jewelry", 7.25, 144);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lip Balm", "Beauty & Personal Care", 8.19, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Running Shoe", "Clothing, Shoes & Jewelry", 55.99, 16);