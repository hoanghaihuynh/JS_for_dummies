// 11a 
const nums = [10, 20, 30];
nums.push(99);
console.log(nums);

// 11b 
function getLastValue(array) {
    return array[array.length - 1];
}
console.log([1, 20, 22, 24, 5]);
console.log(['hi', 'hello', 'good']);

// 11c
function arraySwap(array) {
    let temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
} 
console.log(arraySwap([1, 20, 22, 24, 5]));

// 11d, 11f 
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
let i = 0;
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
// 11e, 11f
// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }
let i1 = 5;
while (i >= 0) {
    console.log(i);
    i--;
}
// 11g 
const nums3 = [1, 2, 3];
for (let i = 0; i < nums3.length; i++) {
    nums3[i] = nums3[i] + 1;
}
console.log(nums3);
// 11h 
function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}
console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));
// 11i 
function addNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        array[i] += num;
    }
    return array;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

// 11j 
function addArray(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        array1[i] += array2[i];
    }
    return array1;
}
console.log(addArray([1,1,2], [1,1,3]));
console.log(addArray([1,2,3], [4,5,6]));
// 11k 
function countPositive(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            count++; 
        }
    }
    return count;
}
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
