## Function Definitions!


### 1.  Build your own concatenation
Return a new string that is the combination of two arguments passed into the function

**Example: `dog` and `house` will display `doghouse`**

```javascript
function combineWords(word1, word2) {
	// TODO: Place your code here
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'
```

### 2.  Repeat a phrase
Display an argument phrase to the console n times

```javascript
function repeatPhrase(phrase, n) {
	// TODO: Place your code here
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello
```

### 3.  Build your own Power function
Return number <sup>power</sup> *without* using built-in `Math` functions

**Example**:   
**4<sup>5</sup> = 4 \* 4 \* 4 \* 4 \* 4 = 1024**

```javascript
function toTheNthPower(number, power) {
	// TODO: Place your code here		
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024
```

### 4. Area of a circle:  &pi; r<sup>2</sup>
Return the area of a circle given the radius  
[background information](http://www.mathgoodies.com/lessons/vol2/circle_area.html)

```javascript
function areaOfACircle(radius) {
	// TODO: Place your code here
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57
```


### 5.  Pythagorean Theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
Return c given a and b  
[background information](https://en.wikipedia.org/wiki/Pythagorean_theorem)

```javascript
function pythagoreanTheorem(a, b) {
	// TODO: Place your code here
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;
```

###  6. Is X Evenly Divisible by Y ?
Return a boolean value whether or not X can be divided by Y without any remainders.  

*Hint: Explore the world of Modulus operators!*

```javascript
function isXEvenlyDivisibleByY(x, y) {
	// TODO: Place your code here
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true
```



### 7.  Vowel Count:
Return the number of occurrences of vowels in a word.
Vowels are `a`, `e`, `i`, `o`, `u`, and `y`

```javascript
function countVowels(word) {
	// TODO: Place your code here
}

var result = countVowels("stealing");
console.log(result);
// displays 3
```
*Challenge: Can you alter the code to count both upper case AND lower case?*

### 8. Does the array contain "wdi"
Given an array, return `true` if it contains the string "wdi" and `false` if it does not contain that string.

Example:

```javascript
findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
```

```javascript

	function findWdi(arr){
		// TODO: Place your code here
	}

```

### 9. Build an ASCII Triangle!
Display a simple triangle with asterisks

**Example:   
printTriangle(5)**

```javascript
*
**
***
****
*****
```

```javascript
function printTriangle(length) {
	// TODO: Place your code here
}

printTriangle(3);
// displays
// *
// **
// ***
```

### 10. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
**Example:  printPyramid(10);**

```javascript
           *
          * *
         * * *
        * * * *
       * * * * *
      * * * * * *
     * * * * * * *
    * * * * * * * *
   * * * * * * * * *
  * * * * * * * * * *
```

*Warning: This is a surprisingly tricky interview-level exercise.  Try at your own risk!*

```javascript
function printPyramid(length) {
	// TODO: Place your code here
}
```
