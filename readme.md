# MEAN stack website
This project incorporates Angular front-end framework, served by Express web server.
The website devoted to National Parks of USA. On Yosemite web page users can leave comments regarding Yosemite National Park.
Additional features: gallery, dynamic title header, active link class for navigation, custom CSS styles, custom 404 page.

![](mean-stack.gif)


## Structure
  * Express
    Express application structure with start scripts, view/route/model directories, mongo/mongoose, a data service class, etc.
    A REST API for all four CRUD operations.  
    The application using a static route in Express. In other words, your server code delivered both your Angular code and your Express app.
  * Angular    
    A router with at least two views/pages.
    At least two CRUD operations must be supported via Angular using REST API.
    REST API access contained in a data service class.

## Functionality
Application provides the ability to do all four CRUD operations that lets user(s) manage information stored in the database. The application allows user  to retrieve a resource(s), create a new resource, update existing ones, and delete them (all four CRUD operations).