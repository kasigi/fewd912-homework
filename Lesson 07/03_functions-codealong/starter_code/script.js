// Let's create 4 functions!

// 0. Add 4 to a number

function addFour(add4ToMe){
    let myNewVariable = 0;
   
    const myPet = "Guinea Pig";

    myNewVariable = add4ToMe + 4;

    return myNewVariable;
}

console.log(addFour(4));
console.log(addFour(-1));
console.log(addFour(37));

// Is param a number

function amIANumber(myParam){

    if(typeof myParam == 'number'){
        return true;
    }else{
        return false;
    }

}

console.log(amIANumber(addFour(66)));
console.log(addFour("three's a good number"));
console.log(addFour("8"));
console.log(amIANumber(addFour("three's a good number")));
console.log(amIANumber('Gouda is a "good" word '));
console.log(amIANumber(2711.2917));


// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument/parameter times itself (the square of the number)

function squared(tomato){
    let rats = tomato * tomato;
    return rats;
}


console.log(squared(2));
console.log(squared(squared(2)));
console.log(squared(5));
console.log(squared(-3));
console.log(squared(236));

function drainBlood(){
    const theSelector = ".vampiresVictim";
    document.querySelector(theSelector).innerHTML = "<p>The vampire has drained their victim of all precious fluids</p>";
}

document.querySelector(".vampire").addEventListener('click',drainBlood);

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(theStringToMeasure){
    return theStringToMeasure.length;
}


console.log("StringLength");
console.log(stringLength("Tor"));
console.log(stringLength("testing"));
console.log(stringLength("This is a longer string."));
console.log(stringLength("The collected works of Jane Austen is a lot of words. Most of which are hilarious."))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(p1,p2){
    return p1 + p2;
}



console.log("Adding Numbers");
console.log(addNumbers(1, 1));
console.log(addNumbers(2, 2));
console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));
console.log(addNumbers(3.14159671, 3.14159671));


// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(firstName, lastName){

    if(typeof firstName == 'undefined' || typeof lastName == 'undefined'){
        return null;
    }

    let myOutput = "Hello, " + firstName + " " + lastName;
    return myOutput;
}
console.log("Name");
console.log(sayHello("Peter"));
console.log(sayHello("Paul","Brown"));
console.log(sayHello("Hal","9000"));


