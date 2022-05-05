# burgerdudes
WAD2 Coursework

How to run
-------------------------
In order to run this site clone the repository to your desired location
* type 'node index' - to start the local server
* browse to localhost:3000 in your browser to access the site
* To access the staff section of the site use the default admin credentials which are:
    Admin | Admin

The site should just run, but in the event that there are errors please ensure to install the following dependencies:

    bcryptjs
    cookie-parser
    cookieparser"
    dotenv
    express
    jsonwebtoken
    mustache-express
    nedb
    nodemon
    path


About
-------------------------
This Coursework application is of a simple burger restaurant website called Burger Dudes.

It is comprised for 4 pages on the front end for public access
* Home - The landing page for the site
* About - Further information including companies ethos
* Menu - The main and side menu items
* Login - This is where staff can enter credentials to access the backend

The backend for staff is comprised of 3 main sections also which are split into parts
* Dash - a landing page for logged in users
* Menu Edit - Where the dishes in the system can be added and removed from the front facing menu
* Dish Edit - This can be used to add and remove dishes from the system.

Feature List
-------------------------
* Encrypted login system (default credentials 'Admin | Admin')
* Working database where dishes can be added and removed as well as flagged for visibility on the menu
* Dynamic design using mustache so modules can be easily created and added to the front end if needed.
* Responsive design using bootstrap to fit all screen sizes