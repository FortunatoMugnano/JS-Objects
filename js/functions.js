console.log("Functions sheet for me!");

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5 and 7, and check if the remainder is 0  
    if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        console.log("ChickenMonkey!") // ChickenMonkey will appear!
    }
    // Else, if it's only divisible by 5
    else if (currentNumber % 5 === 0) {
        console.log("Chicken!") // Chicken will appear!
    }
    //Else, if it's only divisible by 7
    else if (currentNumber % 7 === 0) {
        console.log("Monkey!") // Monkey will appear!
    }

    else{
        console.log(currentNumber);
    }

}

let bandNumber = 1

const takeNumber = function (bandname) {
    let sentence= `${bandname} is number ${bandNumber}.`
    bandNumber++;
    return sentence
}


const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console




const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Loops the food and cooks them
for(let i = 0; i < foods.length; i++){
    grill(foods[i]);
}

console.log(cookedFood);


