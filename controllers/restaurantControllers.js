const menuDAO = require('../models/menuModel');


const menu = new menuDAO();
menu.init()

exports.show_login = function (req, res) {
    res.render("staff/login", {
        title: "Staff Login",
    });
};

exports.handle_login = function (req, res) {
    res.redirect("/dash")
};

exports.landing_page = function (req, res) {
    res.render("landing", {
        title: "Home",
        home: "home"
    });
}

exports.loggedIn_landing = function (req, res) {
    res.render("staff/dash", {
        title: "Staff Dashboard",
        user: "user"
    });
};

exports.dish_edit_page = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/dishEdit", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.dish_edit_menu = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/addDishMenu", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.display_current_menu = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/staffContent/displayCurrentMenu", {
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.dish_edit_add_main_page = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/addmaindish", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.dish_edit_add_side_page = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/addsidedish", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.menu_edit_page = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/menuEdit", {
                title: "Menu Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.menu_edit_add_dish = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/adsSidedish", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}
exports.menu_edit_remove_dish = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/removesidedish", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.remove_dish_page = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("staff/removeDish", {
                title: "Dish Editor",
                user: "user",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}


exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
};

exports.about_page = function (req, res) {
    res.render("about", {
        title: "About"
    });
}

exports.menu_page = function (req, res) {
    menu.getAllEntries()
        .then((list) => {
            res.render("menu", {
                title: "Menu",
                entries: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.add_main_dish = function (req, res) {
    console.log("Adding dish to system");
    if (!req.body.name) {
        response.status(400).send("Entries must have a name.");
        return;
    }
    menu.addMainDish(req.body.name, req.body.description, req.body.price, req.body.ingredients, req.body.allergens);
    res.redirect("/dishEdit");
};

exports.add_side_dish = function (req, res) {
    console.log("Adding dish to system");
    if (!req.body.name) {
        response.status(400).send("Entries must have a name.");
        return;
    }
    menu.addSideDish(req.body.name, req.body.description, req.body.price, req.body.ingredients, req.body.allergens);
    res.redirect("/dishEdit");
};

exports.remove_dish = function (req, res) {
    console.log("Removing dish");
    if (!req.body.name) {
        res.redirect("/remove-dish");
        return;
    }
    menu.removeDish(req.body.name);
    res.redirect("/remove-dish");
};

exports.add_dish_to_menu = function (req, res) {
    console.log("Adding dish to menu");
    if (!req.body.name) {
        response.status(400).send("Dish must have a name.");
        return;
    }
    menu.addDishToMenu(req.body.name);
    // menu.addMainDishToMenu(req.body.name, req.body.description, req.body.price, req.body.ingredients, req.body.allergens);
    res.redirect("/menuedit");
};

exports.remove_dish_from_menu = function (req, res) {
    console.log("Removing dish from menu");
    if (!req.body.name) {
        res.redirect("/menuedit");
        return;
    }
    menu.removeDishFromMenu(req.body.name);
    // menu.addMainDishToMenu(req.body.name, req.body.description, req.body.price, req.body.ingredients, req.body.allergens);
    res.redirect("/menuedit");
};

