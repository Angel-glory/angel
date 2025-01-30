function areaOfNumber(radius){
   let area=3.14*radius*radius;
   return area;
}
console.log(areaOfNumber(6));
// circumference
function circumferenceOfCircle(rad){
    let circumference=3.14*rad*2;
    return circumference;
}
console.log(circumferenceOfCircle(7));

//counting vowels
function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}


let text = "Hello World";
console.log(countVowels(text)); 

// sum of digits
function sumOfDigits(number) {
    let sum = 0;
    let numString = number.toString();

    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }
    return sum;
}


let number = 12345;
console.log(sumOfDigits(number)); 
// quadratic equations
function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return "No real solutions.";
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return `One solution: ${root}`;
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Two solutions: ${root1} and ${root2}`;
    }
}


let a = 1, b = -3, c = 2;
console.log(solveQuadratic(a, b, c));
// factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 

// anested loop
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

let numberOfRows = 5;
printTriangle(numberOfRows);





