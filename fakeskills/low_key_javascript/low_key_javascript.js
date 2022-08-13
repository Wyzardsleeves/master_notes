// Vocabulary Words

// - Under the hood:
//     - Empty strings are the string equivalent of 0

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

//     -EXAMPLE-------------------------------
        var camper = "James";
        var camper = "David";   //overrides James
        console.log(camper)     //returns David

        let camper = "James";
        let camper = "David";   //causes error
        camper = "David";       //reassigns, will not cause error
        console.log(camper);  

        const camper = "James"
        const camper = "Lloyd"  //causes error
        camper = "Lloyd"        //causes error
        console.log(camper);
//     ---------------------------------------

/*

*/