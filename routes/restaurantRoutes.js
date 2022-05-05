const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantControllers.js');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth');

router.get('/login', controller.show_login);
router.post('/login', login, controller.handle_login);
router.get("/", controller.landing_page);
router.get("/about", controller.about_page);
router.get("/menu", controller.menu_page);
router.get("/dash",verify, controller.loggedIn_landing);
router.get("/dishedit",verify, controller.dish_edit_page);
router.get("/add-dish",verify, controller.dish_edit_menu);
router.get("/add-dish/main",verify, controller.dish_edit_add_main_page);
router.get("/add-dish/side",verify, controller.dish_edit_add_side_page);
router.get("/remove-dish",verify, controller.remove_dish_page);
router.post('/addmaindish', verify, controller.add_main_dish);
router.post('/addsidedish', verify, controller.add_side_dish);
router.post('/removedish', verify, controller.remove_dish);
router.post('/add-dish-to-menu', verify, controller.add_dish_to_menu);
router.post('/remove-dish-from-menu', verify, controller.remove_dish_from_menu);

router.get("/menuedit",verify, controller.menu_edit_page);

router.get("/logout", controller.logout);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});

router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
});
module.exports = router;