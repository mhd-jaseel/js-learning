//Reverse a string without using reverse().
function reverse(str){
  let rev=""
    for (let i= str.length-1;i>=0;i--){
        rev+=str[i]
    }
    console.log(rev)
}
reverse("jaseel")


// Find the largest number in an array without using Math.max()

function largestNumber(num){
    let largest=0

    for (let i =0;i<num.length;i++){
        if(largest<num[i]){
            largest= num[i]
        }
    }
    console.log(largest)
}
largestNumber([1,4,3,6,2])

// Find the second largest number in an array without using sort()

function secondLargest(num){

    let largest=num[0]
    let secondLargest=num[0]

    for (let i=0;i<num.length;i++){
       if(num[i]>largest){
        secondLargest=largest
         largest=num[i]

       }else if(num[i]>secondLargest && num[i]!==largest){
        secondLargest=num[i]

       }

    }

    console.log(secondLargest)
}
secondLargest([1,3,2,5,2,6])

// Find the duplicate elements in an array

function dupicate(num){
    let dupicate=[]

    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if (num[i]==num[j]){
                dupicate.push(num[j])
            }
        }
  
    }
    console.log(dupicate)
}
dupicate([1,4,2,7,1,5,8,8])

// Remove duplicate elements from an array without using Set

function removeDuplicate(num){
      let newNum=[]
      for(let i= 0;i<num.length;i++){
        if(!newNum.includes(num[i])){
            newNum.push(num[i])
        }
      }
      return newNum
      
}
console.log(removeDuplicate([1,5,3,6,23,1]))