//Two Pointers Playground
//run "node fakeskills/two_pointers/two_pointers_playground" from root for output

const sampleData = "friends";       //sample input
const sampleDataSingle = "f"        //sample input for single letter to test base case.

const reverseStringBest = (s) => {  //best practice for time/space complexity.
    let array = s.split("")         //splits the string into an array
    let left = 0                    //assign left pointer to the beginning of array
    let right = array.length - 1    //assign right pointer to the end of the array.
    while(left < right){            //while loop instead of for loop that stops the loop when pointers meet.
        [array[right], array[left]] = [array[left] , array[right]]  //swapping values
        left++              //increment left pointer to the right
        right--             //decrement the right pointer to the left
    }
    return array.join("")   //rejoin the array into a string
}

const reverseStringBrute = s => s.split("").reverse().join("")  //easiest way to perform the task, however, some will not allow javascript methods

console.log(`Output from best: ${reverseStringBest(sampleData)}`)
console.log(`Output from brute: ${reverseStringBrute(sampleData)}`)