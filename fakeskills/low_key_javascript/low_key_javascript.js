// Vocabulary Words

// - Under the hood:
//     - Empty strings are the string equivalent of 0

//      -EXAMPLE-------------------------------
        let zero = 0
        let emptyString = ""
        zero == emptyString     //returns true
//      ---------------------------------------

// - Promises
//     - Function that fires off after another function.
// - Async/await
//     - works like a promise but is newer and written differently
// - Immutable variables 
//     - Introduced in ES6
//     - Const
//         - Used for variables that aren’t going to be reassigned.
//         - The const keyword creates a read-only reference to a value
//         - The const keyword makes a variable itself immutable, not its assigned content. When the content is an object, this means the object itself can still be altered. Therefore, it's possible to change the content of the object that is declared with const variable, but you cannot assign a new object to a const variable.
//     - Let
//         - Slower
//         - Can be reassigned but not declared twice.
//         - Allows you to declare variables that are limited to the scope of a block statement or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope
//     - Var
//         - Faster
//         - Mainly used

//      -EXAMPLE-------------------------------
        var camper = "James";
        var camper = "David";   //overrides James
        console.log(camper)     //returns David

        let camper = "James";
        let camper = "David";   //redeclaration causes error
        camper = "David";       //reassigns, will not cause error
        console.log(camper);  

        const camper = "James"
        const camper = "Lloyd"  //redeclaration causes error
        camper = "Lloyd"        //reassignment causes error
        console.log(camper);
//      ---------------------------------------

// - Object.freeze(obj)
//         - prevents data mutation of a variable.
//         - what we thought "const" was doing. 

//      -EXAMPLE------------------------------
        let investor = {
                name: "Justin",
                review: "A really cool guy"
        };

        Object.freeze(investor);        //prevents 'name' and 'review' in "investor" from being mutated
        investor.review = "Mean"        //results in error
        investor.name = "Justin's evil clone"   //results in error
//      --------------------------------------


// - Traditional Functions:
//         - Requires "return" keyword.
//         - Requires brackets.
// - Arrow Functions:
//         - Syntax sugar for functions.
//         - Arrow functions allow you to omit the keyword "return"
//         - Arrow functions allow you to omit the brackets
//         - This helps to simplify smaller functions into one-line statements

//      -EXAMPLE------------------------------
        //previous arrow functions
        const writeFunction = function(){               //requires brackets                         
                var something = "this is Something";  
                return something;                       //requries "return"
        }

        //inline arrow functions
        const arrowFunction = () => "this is Something";

        //setting default values
        const familySize = (parents = 2, kids) => parents + kids; //parents will default to 2 unless 1 is passed
//      --------------------------------------


// - Rest Parameter with Function Parameters
//         - Allows you to create functions that take a variable number of arguments.
//         - Args are stored in an Array that can be accessed later from inside the function.
//         - The rest parameter allows us to apply .map(), .filter(), .reduce(), etc.

//      -EXAMPLE------------------------------
        const argCount = (...args) => console.log(`You passed ${args.length} arguments`)
        argCount(1, 4, "mouse", [40, 19])       //will return "You passed 4 arguments"
//      --------------------------------------


// - Spread Operator
//         - Allows developer to expand arrays and other expressions in places where multiple parameters or elements are expected.
//         - Returns an unpacked array.
//         - Only works in-place, like an argument to a function.       
        
//      -EXAMPLE------------------------------
        let dogs = ["Great Dane", "Cocker"]
        let newDogs = [...dogs]
        console.log(newDogs)    //returns ['Great Dane', 'Cocker']
//      --------------------------------------


// - Destructuring Assignment
//         - ES6 syntax for neatly assigning values taken directly from an object.
//         - Removes the need for multiple assignments.
//         - Also allows you to assign NEW names from old values.
//         - Also works with nested objects.
//         - Can also assign variables from Arrays
//              - Different from a spread operator
//              - Allows you to pick which elements you want to assign to variables

//      -EXAMPLE------------------------------
        const dogs2 = {breed: "Cocker", size: "medium"}
        
        //Old Way (ES5)
        var breed = dogs2.breed;
        var size = dogs2.size
        console.log(`A ${breed} is of ${size} size compared other dogs`)        //returns "A Cocker is of Medium size compared to other dogs"

        //ES6 Assignment via Destructuring
        const {breed, size} = dogs2;    //same thing with only one assignment
        console.log(`A ${breed} is of ${size} size compared other dogs`)        //also returns "A Cocker is of Medium size compared to other dogs"

        //Assignment with new variable names
        const {breed: newBreedName, size: newSizeName} = dogs2
        console.log(`A ${newBreedName} is of ${newSizeName} size compared other dogs`)     //returns "A Cocker is of Medium size compared to other dogs"

        //Nested assignment
        const cat = {
                calico: {
                        age: 8,
                        name: "Niko" 
                }
        }

        const {calico: {age: newAge, name: newName}} = cat;
        console.log(`An ${newAge} year-old cat sat in a window. Her tag reads: ${newName}`)

        //Assign variables from Arrays (different from spread operator)
        const [a, b] = [1, 2, 3, 4, 5, 6];      
        console.log(a, b)                       //returns 1, 2

        const [a, b,,, c] = [1, 2, 3, 4, 5, 6]; //skipping assignments is allowed using commas to get to the index
        console.log(a, b, c)                    //returns 1, 2, 5
//      --------------------------------------
