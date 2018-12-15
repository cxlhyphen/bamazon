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
VALUES ("leggings", "clothes", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothes", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tshirt", "clothes", 8, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("green tea", "food", 6, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chips", "food", 3, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cookies", "food", 3, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nintendo switch", "electronics", 299, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jenga", "toys", 10, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("spatula", "kitchen", 7, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("salad spinner", "kitchen", 13, 4);

SELECT * FROM products;