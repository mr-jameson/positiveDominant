// Core:
// Positive Dominant
// An array is positive dominant if there are more unqiue positive numbers than there are unique negative numbers
// Write a function that will return a boolean of whether or not the array is positive dominant

"use strict";

let arr = [1, 1, 1, 1, -3, -6];
let arr1 = [6, -1, -1, 34, 3, 6];
let arr2 = [23, 7, -2, -23, -3, 28];


// generate array of unique items
let uniqueNums = (array) => {
        let unique = [...new Set(array)]; 
        return unique;
}

// uniqueNums(arr);
let countNegPos = (array) => {
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < array.length; ++i) {
        if (array[i] > 0)
            posCount += 1;
        else if(array[i] < 0)
            negCount += 1;
        else
            zeroCount+= 1; 
    }
    if (posCount > negCount) {
        // console.log(true);
        return true;
    }  else {
        // console.log(false);
        return false;
    }
}


let positiveDominant = (array) => {
    let unique = uniqueNums(array);
    return countNegPos(unique);
}



//     // count unique positive numbers
//     // count unique negative numbers
//     // compare the two
//     // return boolean
// }

console.log(positiveDominant(arr));
// // false;

console.log(positiveDominant(arr1));
// // true;

console.log(positiveDominant(arr2));
// // false;