DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  itemId INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NOT NULL,
  departmentName VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT (5) NOT NULL,
  PRIMARY KEY (ItemId)
);

INSERT INTO products (productName, departmentName, price, stock)
VALUES 
("iPhone XS case", "Mobile Accessiories", 10.99, 10),
("iPhone XR case", "Mobile Accessiories", 14.99, 10),
("Google Pixel 2", "Mobiles", 600.00, 2),
("Google Pixel XL2", "Mobiles", 899.99, 4),
("Dell Xps 15", "Computers", 1500.00, 3),
("Ps4 Pro", "Video Games", 399.99, 6),
("Nintendo Switch", "Video Games", 299.99, 8),
("Oculus Rift", "Video Games", 399.99, 6),
("JoyCon Pair", "Video Games Accessiories", 79.99, 6),
("Ps4", "Video Games", 299.99, 2);


