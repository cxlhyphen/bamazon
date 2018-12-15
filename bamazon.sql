DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INT(10),
stock_quantity INT(10),
PRIMARY KEY (item_id)
);

-- insert data:
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leggings", "Clothes", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Clothes", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tshirt", "Clothes", 8, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Green Tea", "Grocery", 6, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chips", "Grocery", 3, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cookies", "Grocery", 3, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 299, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jenga", "Toys", 10, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spatula", "Home", 7, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Salad Spinner", "Home", 13, 4);

SELECT * FROM products;