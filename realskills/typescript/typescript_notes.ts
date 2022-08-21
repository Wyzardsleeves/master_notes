//Freecodecamp – The Ultimate Beginners Guide: https://www.freecodecamp.org/news/learn-typescript-beginners-guide/


// Pros of Typescript:

// - Superset of Javascript
//     - Does everything Javascript does with added features. (Like Coffeescript)
// - Adds static typing to Javascript.
//     - Means that the type of a variable cannot be changed at any point in the program.
//     - Can prevent a lot of bugs for the above reason
// - Research shows that Typescript can spot 15% of common bugs.
// - Easier to see what the code is supposed to do thus easier to see what developers are doing.
// - Typescript cannot be interpreted by browsers and is compiled into Javascript.
// - Compiles code even if an error has been detected.

// Cons of Typscript:
// - Takes longer to write than Javascript.
//     - Having to specify types.
//     - May not be worth it for smaller projects.
// - Has to be compiled
//     - Can take long for large projects.


// Install Typescript:

// - Install Typescript Compiler Globally
npm i -g typescript     //install typscript globally
tsc -v                  //check if installation exist

// - Compile Typscript
tsc fileName                                //compiles fileName.ts
tsc fileName.ts  --outfile file-name.js     //compiles fileName.ts with a new name of 'file-name.js
tsc fileName.ts -w                          //compiles fileName.ts automatically with a "watch" tag
tsc -w                                      //compiles everything and watches for changes

// Setup Config File
tsc --init              //creates a ts tsconfig.js file.

/* Common config parameters
{
    "compilerOptions": {
        ...
        // Modules 
        "target": "es2016", // Change to "ES2015" to compile to ES6
        "rootDir": "./src", // Where to compile from
        "outDir": "./public", // Where to compile to (usually the folder to be deployed to the web server)
        
        // JavaScript Support 
        "allowJs": true, // Allow JavaScript files to be compiled
        "checkJs": true, // Type check JavaScript files and report errors
        
        // Emit 
        "sourceMap": true, // Create source map files for emitted JavaScript files (good for debugging)
         "removeComments": true, // Don't emit comments
    },
    "include": ["src"] // Ensure only files in src are compiled
}
*/
