var predictTheWinner = function(nums) {
    let player1Score=0
    let player2Score=0

    for (let i=0;i<nums.length;i+=2){
        player1Score+=nums[i]

    }
        for (let i=1;i<nums.length;i+=2){
        player2Score+=nums[i]

    }
    if (player1Score<player2Score){
        return false
    }else return true
};
console.log(predictTheWinner([1,5,3]))