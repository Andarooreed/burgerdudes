const nedb = require('nedb');

class Menu {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    init() {
        this.db.insert({
            main: "main",
            name: "The Classic",
            description: "A bacon cheese burger cooked just how you like it",
            price: "£7.50",
            ingredients: "Brioche bun, 6oz steak mince patty, lettuce, tomato, cheese",
            allergens: "Gluten, dairy",
            visible: "visible"

        });
        this.db.insert({
            main: "main",
            name: "The Beast",
            description: "A thick cut patty slathered in our signature Texas style BBQ sauce",
            price: "£8.50",
            ingredients: "Brioche bun, 8oz steak mince patty, tomato, signature Texas style BBQ sauce",
            allergens: "Gluten, Peanuts (oil)",
        });
        this.db.insert({
            side: "side",
            name: "Fries",
            description: "Our famous fries with a condiment of your choice",
            price: "£2.50",
            ingredients: "Potato, salt",
            allergens: "Gluten, Peanuts (oil)",
            visible: "visible"
        });

        //for later debugging
        console.log('Menu inserted');
    }

    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //find(author:'Peter) retrieves the data,
            //with error first callback function, err=error, entries=data
            this.db.find({}, function (err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise and return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('getAllEntries() returns: ', entries);
                }
            })
        })
    }

    addDishToMenu(name) {
        const that = this;

        that.db.update({name: name}, { $set: { visible: 'visible' } }, function (err) {
            if (err) {
                console.log("Can't insert main dish: ", name);
            }
        });
    }

    removeDishFromMenu(name) {
        const that = this;

        that.db.update({name: name}, { $unset: { visible: 'visible' } }, function (err) {
            if (err) {
                console.log("Can't remove dish: ", name);
            }
        });
    }


    addMainDish(name, description, price, ingredients, allergens) {
        const that = this;
            var entry = {
                main:"main",
                name: name,
                description: description,
                price: price,
                ingredients: ingredients,
                allergens: allergens
            };
            that.db.insert(entry, function (err) {
            if (err) {
            console.log("Can't insert main dish: ", name);
            }
            });
    }

    addSideDish(name, description, price, ingredients, allergens) {
        const that = this;
            var entry = {
                side:"side",
                name: name,
                description: description,
                price: price,
                ingredients: ingredients,
                allergens: allergens
            };
            that.db.insert(entry, function (err) {
            if (err) {
            console.log("Can't insert side dish: ", name);
            }
            });
    }

    removeDish(name) {
        const that = this;

        that.db.remove({name: name}, {}, function (err) {
            if (err) {
                console.log("Can't remove dish: ", name);
            }
        });
    }




}







//make the module visible outside
module.exports = Menu;