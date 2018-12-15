# bamazon

Welcome to bamazon!

This is a command line node.js application that takes in orders and updates a mySQL database.

## Required Installs

* Node.js
* mySQL
* mySQL Workbench

## How to Install

* Download the app onto your computer.
* Run `npm install`
* Create a `.env` file and add the following to it:
```
# HOST PASSWORD

DB_PASSWORD=
```
* Add in the password for your mySQL Workbench. (I am assuming you'll be running this on localhost.)
* Run the bamazon.sql file (or copy and run it) in your mySQL Workbench

## How to Use

Run the following code: 
```
node bamazonCustomer.js
```
Here's what the app looks like:

![bamazon1](/images/preview1.PNG)

![bamazon2](/images/preview2.PNG)