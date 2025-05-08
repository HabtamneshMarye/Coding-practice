//Question 1 (sum /difference of all numbers taht are found on the array)
// *psuedocode
//creating a function 
//passing a parameter
//initialize a variable to tell it to start adding
//use a for loop method to go through each element of the array
//use assignment opearatore
//return a value
//to check it a creat a variable the containa array of numbers

//One way
function sumArray(arr){
  let sum=0;
  for (let num of arr){
    sum+=num;
  }
  return sum;
}

//example
console.log(sumArray([10, 20, 30]))

//another way
function differenceArray(arr){
  let difference=0;
  for (let num of arr){
    difference-=num;
  }
  return difference;
}
//example2
console.log(differenceArray([-10, 20, -10]))

//Question 2 (sum of numbers)

// *psuedocode
//creating a function 
//passing a parameter
//return a sum of the numbers
//print a value by giving sample number that will going to be added

function addNumbers(a,b,c){
  return a+b+c;
}
console.log(addNumbers(5,6,1))

//Question 3(checking if it is even or odd)

// *psuedocode
//creating a function 
//passing a parameter
//return the passed parameter : 
//this contain when the passed parameter modulus is exactly equal with 0 to said even else odd
//give a sample number

function isEven(number){
  return number%2===0? "Even" : "Odd";
}
console.log(isEven(4));
console.log(isEven(5));

//Question 4(reverse a string)
//creating a function 
//passing a parameter
//statemnt begin first by splitting the string
//then use reverse to reverse the string
// finally joing them
// returning the statement
//give a sample number

function reverseString(str){
  return str.split("").reverse().join("");
}

console.log(reverseString("hellow"));

//Question 5(find the largest of the three numbers)
//creating a function 
//passing a parameter
//i use mat.max for the the passed parameters
//returning a value
//give a sample numbers to check it

function largestNum(a, b, c, d){
  return Math.max(a, b, c, d);
}
console.log(largestNum(9, 20, 12, 30));

//Question 6(counting the vowels in a string)

//creating a function 
//passing a parameter
//initalize a variable the contain a sample string of vowels
//declar a varable that will store the counting of the vowel
//use a for loop method to go through each charcter
//checking if it includes the lowercased variable
//i will make it increment to go through the entire
// returning a value 
//give a sample numbers to check it

function countingVowel(str){
  const vowels="aeiou";
  let count=0;

  for (let i=0; i<str.length; i++){
    if(vowels.includes(str[i].toLowerCase())){
      count++;
    }
  }
  return count;
}
console.log(countingVowel("javascript coopeies"));



//Question 7
//creating a function 
//passing a parameter
//iterating the elements using forEach
//printing out
//give a sample email to check it

function printEmails(emails) {
  emails.forEach(function(email) {
    console.log(email);
  });
}

const emailList = ["john.doe@example.com", "user123@domain.com"];
printEmails(emailList);




