const removeFromArray = function(bag, ...bad) {
    return bag.filter(veg => !bad.includes(veg)) 
    // return a filtered bag where each veg is not included in the 'bad bag'
    }

    // => is shorthand for function - arrow functions, shorthand for below

        /* 
        return bag.filter(function(veg){
        return !bad.includes(veg)
        })
        
        */

// Do not edit below this line
module.exports = removeFromArray;
