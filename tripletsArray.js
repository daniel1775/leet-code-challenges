/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    let i = 0;
    let j = 1;
    let k = 2;
    let result = [];

    while (i < nums.length - 2) {
        let candidate = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
        if (nums[i] + nums[j] + nums[k] === 0) {
            result.push(candidate);
        }

        if (k + 1 < nums.length) {
            k++;
        } else if (j + 1 < nums.length) {
            j++;
            k = j + 1;
        } else {
            i++;
            j = i + 1;
            k = i + 2;
        }
    }

    return result;
};

console.log(threeSum([3,-9,3,9,-6,-1,-2,8,6,-7,-14,-15,-7,5,2,-7,-4,2,-12,-7,-1,-2,1,-15,-13,-4,0,-9,-11,7,4,7,13,14,-7,-8,-1,-2,7,-10,-2,1,-10,6,-9,-1,14,2,-13,9,10,-7,-8,-4,-14,-5,-1,1,1,4,-15,13,-12,13,12,-11,12,-12,2,-3,-7,-14,13,-9,7,-11,5,-1,-2,-1,-7,-7,0,-7,-4,1,3,3,9,11,14,10,1,-13,8,-9,13,-2,-6,1,10,-5,-6,0,1,8,4,13,14,9,-2,-15,-13]))