 3.// largest number
function maximumNumber(array){
    let largest=[0];
   for(let i=1;i<array.length;i++){
   if(array [i]> largest){
   largest = array [i];
   }
   }
  return largest;
}
console.log(maximumNumber([5,6,7,8,3,9]));


4.// sum of elements
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 
    
// speed
function calculateSpeed(distance, time) {
  if (time === 0) {
      return "Time cannot be zero.";
  }
  let speed = distance / time;
  return speed;
}


let distanceTravelled = 100;
let timeTaken = 2; 

console.log(calculateSpeed(distanceTravelled, timeTaken)); 

//force
function calculateForce(mass, acceleration) {
  let force = mass * acceleration;
  return force;
}

console.log(calculateForce(10, 12)); 

