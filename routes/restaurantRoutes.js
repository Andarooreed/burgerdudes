const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantControllers.js');
const { login } = require('../auth/auth')
const { verify } = require('../auth/auth');


// Landing routes
router.get("/", controller.landing_page);
router.get("/about", controller.about_page);
router.get("/menu", controller.menu_page);

// login/logout routes
router.get('/login', controller.show_login);
router.post('/login', login, controller.handle_login);
router.get("/logout", controller.logout);

// Staff routes

// // Dash route
router.get("/dash", verify, controller.loggedIn_landing);

// // Dish editor routes
router.get("/dishedit", verify, controller.dish_edit_landing);
router.get("/dishedit/add-dish", verify, controller.dish_edit_menu);
router.get("/dishedit/add-dish/main", verify, controller.dish_edit_add_main);
router.post('/dishedit/add-dish/main', verify, controller.add_main_dish);
router.get("/dishedit/add-dish/side", verify, controller.dish_edit_add_side);
router.post('/dishedit/add-dish/side', verify, controller.add_side_dish);
router.get("/dishedit/remove-dish", verify, controller.remove_dish_page);
router.post('/dishedit/remove-dish', verify, controller.remove_dish);

// // Menu editor routes
router.get("/menuedit", verify, controller.menu_edit_page);
router.post('/add-dish-to-menu', verify, controller.add_dish_to_menu);
router.post('/remove-dish-from-menu', verify, controller.remove_dish_from_menu);

// error handling
router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send("Woops! Looks like this page doesn't exist!");
});

router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Something has gone wrong on the server');
});

// Make router visible outside of application
module.exports = router;