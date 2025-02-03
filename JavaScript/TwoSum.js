/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length<2 ||nums.length>10000){
        return false
    }
    const lowerbound= -Math.pow(10, 9)
    const upperbound= Math.pow(10, 9)
    for(i=0; i<nums.length; i++){
        if (nums[i]<lowerbound||nums[i]>upperbound){
            return fasle
        }
    }
    if(target<lowerbound||target>upperbound){
        return false
    }
    let numMap= new Map()
    for(i=0; i<nums.length; i++){
        const complement= target - nums[i];
        if(numMap.has(complement)){
            return [numMap.get(complement), i]
        }
        numMap.set(nums[i], i);
    }
    return [];
};
