const server1= Promise.reject("server1 failed");
const server2= Promise.resolve("server2 success");
const server3= Promise.reject("server3 failed");
const server4= Promise.reject("server4 failed");
const server5= Promise.resolve("server5 failed");

Promise.any([server1,server2,server3,server4,server5])
 .then(result=>console.log(result))
 .catch(error=>console.log(error))
 /**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
       if(nums===1){
        return nums[0]
       }
    let dp =[]
    dp[0]=nums[0]
    dp[1]=Math.max(nums[0],nums[1])
    for (let i=2;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1]+dp[1-2])
    }
    return dp[nums.length]
}
