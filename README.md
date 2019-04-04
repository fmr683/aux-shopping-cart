# Aux Shopping Cart API

A Simple API for shopping cart system, programmed with NodeJS and MySQL as storage system.

## Table of Contents 

- [Requirment](#requirment)
- [Installation](#installation)
- [Features](#features)
- [Security](#security)
- [Evolution](#evolution)
- [Documentation](#documentation)
- [Demo Server](#demo)
- [Next](#next)
- [Auther](#author)

---
## Requirment

- NodeJS 8.10 || 8.15
- Git
- MySQL 5.7.x

## Installation

- Clone this repo to your local machine using `https://github.com/fmr683/aux-shopping-cart.git`
- Navigate to `aux-shopping-cart` directory and execute the `npm install`
- Fire up the mysql and create a username and password with `root` with all prvilages
- With craeted user create two database with `aux-shopping-cart` and `aux-shopping-cart-test`
- Import two databases from the project directory `aux-shopping-cart/db` 
- Execute Test (Optinal) `npm test`
- You can start the project `npm start start` || `npm start devstart` || `npm start prodstart`

## Features

- User login
- User registration
- User update information
- Add product to Cart
- View cart details

## Security

- Header auth keys passed on every API header
- JWT token 
- bcrypt password encryption used for the password generation

## Evolution
- [master] <- [develop] <- [Feature branch]

## Documentation
- You can visit the API documentation via http://localhost:3000/apidoc/ || http://ec2-54-255-185-199.ap-southeast-1.compute.amazonaws.com:3000/apidoc/

## Demo
- You can test the API in the following demo server `http://ec2-54-255-185-199.ap-southeast-1.compute.amazonaws.com:3000/`
- Example `http://ec2-54-255-185-199.ap-southeast-1.compute.amazonaws.com:3000/v1/user/login`
- Demo server will be destroyed after two weeks.

## Next?
- Use redis for temporary storage and high performence
- Create load testing

## Author
- See the full profile in https://www.linkedin.com/in/fazlulrahmanmohideen/
