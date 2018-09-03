console.log('test!')
// An Array of Objects.  "const" indicates it can't be mutated "changed"
/*
const pantry = [
    { type: "Apple", healthy: true },
    { type: "Almonds", healthy: true },
    { type: "Marshmallows", healthy: false },
    { type: "Broccoli", healthy: true }
]

// Use es6 filter method to get only healthy foods.
const healthyFoods = pantry.filter(item => item.healthy);
console.log('healthyFoodsFilter', healthyFoods);

// Before es6, using plain javascript without helper libraries, this same problem would look like this. The concept of a for loop is common in all languages. I'm wrapping in a function as well.
function getHealtyFoods(items) {
    var output = [];
    for (var i=0; i < items.length; i++) {
        if (items[i].healthy) {
            output.push(items[i])
        }        
    }
    return output;
}

console.log('getHealtyFoodsES5Function', getHealtyFoods(pantry));

// Same as above, but using es6 filter and wrapping in a function.
const getHealtyFoodsES6Function = (items) => items.filter(item => item.healthy);
console.log('getHealtyFoodsES6Function', getHealtyFoodsES6Function(pantry));
*/