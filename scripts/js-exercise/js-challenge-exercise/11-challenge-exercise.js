// 11l, m 
function minMax(nums) {
    const minMax = {
        min: null,
        max: null
    };
    for (let i = 0; i < nums.length; i++) {
        if (minMax.min === null || nums[i] < minMax.min) {
            minMax.min = nums[i];
        }
        if (minMax.max === null || nums[i] > minMax.max) {
            minMax.max = nums[i];
        }
    }
    return minMax;
}
console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));
console.log(minMax([]));
console.log(minMax([3]));
// 11n 
function countWords(words) {
    const result = {};
    for (let i = 0; i < words.length; i++) {
        let stringValue = words[i];
        if (!result[stringValue]) {
            result[stringValue] = 1;
        }
        else  {
            result[stringValue] += 1;
        }
    }
    return result;
}
console.log(countWords(['apple','grape','apple','apple']));

 

