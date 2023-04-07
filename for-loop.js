
// /Write a function that accepts an array of strings ,question1
//  and console.logs each element using a for loop.
function ArrayString(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
let arr=["Mary","Muna","Makas","Sudet"]
ArrayString(arr)

// question2 Write a function that accepts an array of 
// numbers and uses the forEach() method to console.log each number multiplied by 2.
// let num=[3,6,8,9,10,20]
let num=[3,6,8,9,10,20]
      num.forEach(function(value,index){
         num[index] =value 
        
        console.log(value*2) 
});

// Write a function that takes in an array of numbers and consoles ..question 3
// the first four items multiplied by 8 and the last two added by 5. Console the array with the new value
let arrs=[10,20,30,40,50,60]
function arrNums(arrs){
    for ( i=0; i<4; i++){
        arrs[i] *=8
    }
    for(let i=arrs.length -2; i<arrs.length; i++){
        arrs[i] +=5

    }
    console.log(arrs)

 }
 arrNums(arrs)





// Write a function that takes in the following array and use,,,,, question4
// a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9]
function Arr(arrNum){
    let i=0
    while(i<arrNum.length){
        console.log(arrNum[i])
        if(i===3){
            break;

        }
        i++;
    }
}
Arr(arrNum);






// Write a function that takes in a an array of strings and use a continue question5
//statement when the item is at the second index
 let fruits= ['apple','plum','banana','strawberries','kiwi']
function arrStr(fruits){
    for ( i=0; i<fruits.length; i++){
        if(i===1){
            continue;
        }
    
    console.log("continue",fruits[i])
}
}

arrStr(fruits)
