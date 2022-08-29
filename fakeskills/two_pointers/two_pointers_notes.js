//Two Pointer Notes

// https://www.youtube.com/watch?v=lMa36OOKy7Y

// - In computer science, a pointer is a reference to an object.
// - Good for analyzing each element of a collection compared to its other elements.
// - Efficient because it proccesses to elements per loop instead of just one.
// - Used to search for pairs in a sorted array.
// - Problems that may warrant Two Pointers.
//     - One slow-runner and the other fast-runner.
//         - Removing duplicates.
//     - One starts from beginning and the other starts from the end.
//         - Reverse the characters of a string.
    
//Reverse a String (in place)

//best practice
const reverseString = (s) => {
    s = s.split("")
    let left = 0;       //sets left pointer to beginning of array
    let right = s.length - 1;   //
    while(left < right){        //repeats until loop is done
        let hold = s[left];
        s[left] = s[right];
        s[right] = hold;
        left++
        right--
    }
    return s
}

//brute force
const reverseString = (s) => {
    s.split("")
    s.reverse();
    return s.join("")
}