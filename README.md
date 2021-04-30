# 13-E-Commerce-Back-End-ORM-no-deploy

## Description
This is a back-end tool used to track e-commerce products. To use, follow the [Installation](##Installation) instructions then see [Usage](##Usage) for a walkthrough on how to use the application. The link to the GitHub repository can be found [here](https://github.com/markkhoo/13-E-Commerce-Back-End-ORM-no-deploy).

## Installation
As this is a commandline allplication, steps for installion on your local machine is required. Complete the following steps:
1. Clone this repository onto your local machine.
2. Install modules by navagating to the repository in your CLI and running `'npm install'`. This should install all necessary modules for this application.
3. In your MySQL shell, run the schema that is found in `db/schema.sql` to instantiate the database locally. A snippet of the schema is provided here as well:
    ```sql
        -- DROP DATABASE
        DROP DATABASE IF EXISTS ecommerce_db;

        -- CREATE DATABASE
        CREATE DATABASE ecommerce_db;
    ```
    For example seeds, run `'npm run seed'` to seed the database. These seeds are optional of course.
4. All installation steps should be complete. `'npm start'` can be used to start the application. See [Usage](##Usage) for more details.

## Usage
This [video](https://youtu.be/k1TTuy6QAng) provides a short and simple walkthrough on how to use this application. Simply run `'npm start'` in your CLI to start the server. For API calls, use Insomnia, Postman or another tool to test fetch requests.

## Technologies Used
* Javascript
    * express
    * dotenv
    * nodemon (for development)
* SQL
    * sequelize
* MySQL
* Insomnia Core (for API testing)

---

## Contact
For any questions contact GitHub user [markkhoo](https://github.com/markkhoo) or at this email: markkhoo95@gmail.com