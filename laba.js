                                    // 1
function getRectangleArea(a, b) {
    let s = a * b
    console.log(s)
}
/*
getRectangleArea(5,10)
getRectangleArea(5,5)
*/


                                        // 2
function getCircleCircumference(r) {
    let s = 2* Math.PI * r 
    console.log(s)
}
/*
getCircleCircumference(5)
getCircleCircumference(3.14)
getCircleCircumference(0)
*/

                        // 3

function getAverage(a, b) {
    let av = (a + b) / 2
    console.log(av)
}
/*
getAverage(5,5)
getAverage(10,0)
getAverage(-3,3)
*/

                                            // 4

function getDistanceBetweenPoints(x1, y1, x2, y2) {
    let l = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
    console.log(l)
}

// getDistanceBetweenPoints(0,0,0,1)
// getDistanceBetweenPoints(0,0,1,0)
// getDistanceBetweenPoints(-5,0,10,-10)


                                            // 5
function getLinearEquationRoot(a, b) {
    if(a === 0){
        console.log(false)
    }
    else{
        console.log(-b / a)
    }
}

// getLinearEquationRoot(5, -10)
// getLinearEquationRoot(1, 8)
// getLinearEquationRoot(5, 0)

                                            // 6

function getAngleBetweenVectors(x1,y1,x2,y2) {
    let an1 = Math.atan2(y1,x1)
    let an2 = Math.atan2(y2,x2)
    let raz = Math.abs(an1 - an2)
    if(raz > Math.PI){
        raz = 2 * Math.PI - raz
    }
    console.log(raz)
}

// getAngleBetweenVectors(1,0,0,1)
// getAngleBetweenVectors(0,1,0,-1)
// getAngleBetweenVectors(0,-1,1,0)
// getAngleBetweenVectors(0,1,0,1)

                                                // 7

function getLastDigit(num) {
    let s = String(num)
    console.log(Number(s.slice(-1)))
}

// getLastDigit(100)
// getLastDigit(37)
// getLastDigit(0)
// getLastDigit(5)

                                                // 8

function parseNumberFromString(str) {
    let num = Number(str)
    console.log(num)
}
// parseNumberFromString('100')
// parseNumberFromString('37')
// parseNumberFromString('-525.25')

                                                    // 9

function getParallelepipedDiagonal(a, b, c) {
    let s = (a ** 2 + b ** 2 + c ** 2) ** 0.5
    console.log(s)
}
// getParallelepipedDiagonal(1,1,1)
// getParallelepipedDiagonal(3,3,3)
// getParallelepipedDiagonal(1,2,3)

                                                    // 10

function roundToPowerOfTen(n1, n2) {
    if(n2 === 0) {
        console.log(n1)
    }
    else{
        let s = Math.pow(10, n2)
        console.log(Math.round(n1 / s) * s)
    }
    
}

// roundToPowerOfTen(1234, 0)
// roundToPowerOfTen(1234, 1)
// roundToPowerOfTen(1234, 2)
// roundToPowerOfTen(1678, 2)
// roundToPowerOfTen(1678, 3)

                                                // 11
function isPrime(n) {
    if( n <= 1){
        return console.log(false)
    }
    for(i=2; i<n; ++i){
        if(n%i === 0){
            return console.log(false)
        }
    }
    return console.log(true)
}

// isPrime(4)
// isPrime(11)
// isPrime(16)
// isPrime(17)

                                            // 12
function toNumber(value, def) {
    let num = Number(value)
    if(isNaN(num) || value === ''){
        return console.log(def)
    }
    return console.log(num)
}
// toNumber(null, 0)
// toNumber('test', 0)
// toNumber(42, 0)
// toNumber(new Number(42), 0)


                                                // 13

function getCube(n) {
    let s3 = n ** 3
    console.log(s3)
}
// getCube(3)
// getCube(-2)
// getCube(0)

                                                // 14
function getFibonacciNumber(n) {
    if(n <= 0) {
        return 0
    }
    else if(n === 1){
        return 1
    }
    else{
        return getFibonacciNumber(n-1) + getFibonacciNumber(n-2)
    }
}
// console.log(getFibonacciNumber(0))
// console.log(getFibonacciNumber(3))
// console.log(getFibonacciNumber(10))

                                                    // 15
function getSumToN(n) {
    let sum = 0
    for(i=1; i <= n; ++i){
        sum += i
    }
    console.log(sum)
}

// getSumToN(5)
// getSumToN(10)
// getSumToN(1)

                                                // 16
function getSumOfDigits(a) {
    let sym = String(a).split('')
    let sum = 0
    for(i = 0; i < sym.length; ++i){
        sum += Number(sym[i])
    }
    console.log(sum)
}

// getSumOfDigits(123)
// getSumOfDigits(202)
// getSumOfDigits(5)

                                                    // 17
function isPowerOfTwo(n) {
    if(n <= 1) {
        return false
    }
    while(n % 2 === 0){
        n = n / 2
    }
    return n === 1
}
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(16))
// console.log(isPowerOfTwo(15))

                                                // 18
function getSine(n) {
    console.log(Math.sin(n))
}
// getSine(0)
// getSine(Math.PI / 2)

                                                // 19

function numberToStringInBase(num, base) {
    console.log(num.toString(base))
}
// numberToStringInBase(255,16)
// numberToStringInBase(2,2)
                                                // 20

function toExponential(number, fractionDigits) {
    console.log(number.toExponential(fractionDigits))
}

// toExponential(12345, 2)

                                                // 21

function toFixed(number, fractionDigits) {
    console.log(number.toFixed(fractionDigits))
}
// toFixed(12345, 2)
// toFixed(12.345, 1)

                                                // 22
function toPrecision(number, precision) {
    console.log(number.toPrecision(precision))
}
// toPrecision(12345, 7)
// toPrecision(12.345, 4 )

                                            // 23
function getNumberValue(number) {
    console.log(number.valueOf())
}
// getNumberValue(new Number(5))
// getNumberValue(Number(-5))

                                                    // 24

function isNumber(number) {
    console.log(Number.isFinite(number))
}
// isNumber(Infinity)
// isNumber(NaN)
// isNumber('a' / 1)
// isNumber('5')
// isNumber(5)
// isNumber(0)

                                                        // 25
function isInteger(number) {
    console.log(Number.isSafeInteger(number))
}
// isInteger(5)
// isInteger(5.1)
// isInteger('5')

                                                        // 26

function getFloatOnString(str) {
    console.log(parseFloat(str))
}
// getFloatOnString('4.567abcdefgh')
// getFloatOnString('abcdefgh')

                                                        // 27

function getIntegerOnString(str,base) {
    console.log(parseInt(str, base))
}
// getIntegerOnString('4.567abcdefgh', 10)
// getIntegerOnString('abcdefgh', 10)
// getIntegerOnString('1.234', 2)
// getIntegerOnString('10', 8)

                                                        // 28

function isSafeInteger(number) {
    console.log(Number.isSafeInteger(number))
}
// isSafeInteger(10)
// isSafeInteger(3.5)
// isSafeInteger(2 ** 53)

                                                    // 29
function roundToSmallestInteger(number) {
    console.log(Math.floor(number))
}

// roundToSmallestInteger(5.9)
// roundToSmallestInteger(-5.1)

                                                    // 30
function roundToLargestInteger(number) {
    console.log(Math.ceil(number))
}
// roundToLargestInteger(5.9)
// roundToLargestInteger(-5.1)

                                            // 31
function roundToNearestInteger(number) {
    console.log(Math.round(number))
}
// roundToNearestInteger(5.5)
// roundToNearestInteger(5.4)
// roundToNearestInteger(-5.5)

                                                    // 32
function getIntegerPartNumber(number) {
    console.log(Math.trunc(number))
}
// getIntegerPartNumber(5.5)
// getIntegerPartNumber(5.4)
// getIntegerPartNumber(-5.5)

                                                        // 33

function getSumOfNumbers(x1,x2,x3) {
    console.log(Number(x1 + x2 + x3).toFixed(1))
}
// getSumOfNumbers(1, 2, 3)
// getSumOfNumbers(0.1, 0.2, 0.3)

                                                        //34
function getMaxNumber(num1, num2) {
    console.log(Math.max(num1, num2))
}
// getMaxNumber(1,2)
// getMaxNumber(-5,-6)
// getMaxNumber(0,5)

                                                        // 35

function getRandomInteger(min, max) {
    console.log(Math.round(min + Math.random() * (max - min)))
}
// getRandomInteger(1,2)
// getRandomInteger(-5,0)
// getRandomInteger(-1,1)
                                                        // 36
function getHypotenuse(a, b) {
    let s = (a ** 2 + b ** 2) ** 0.5
    console.log(s) 
}
// getHypotenuse(3, 4)

                                                        // 37

function getCountOfOddNumbers(number) {
    console.log(Math.ceil(number / 2))
}

// getCountOfOddNumbers(4)
// getCountOfOddNumbers(5)
// getCountOfOddNumbers(10)
// getCountOfOddNumbers(15)