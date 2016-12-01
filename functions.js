// TODO: add your solutions here!
function combineWords(word1, word2){
    return word1 + word2;
}

// var result = combineWords('dog','house')
// console.log(result)

function repeatPhrase(phrase, n){
    for (i=0;i<n;i++){
        console.log(phrase);
    }
}

// repeatPhrase('Hello',5)

function toTheNthPower(number, power){
    var x = number;
    for (var i = 0; i<power-1; i++){
        x *= number;
    }
    return x;
}

// var result = toTheNthPower(4, 5);
// console.log(result);

function areaOfACircle(radius){
    return radius*radius*Math.PI;
}

// var result = areaOfACircle(2);
// console.log(result);

function pythagoreanTheorem(a,b){
    return Math.sqrt(a*a+b*b)
}

// var result = pythagoreanTheorem(3,4);
// console.log(result);

function isXEvenlyDivisibleByY(x,y){
    return (x%y===0)
}

// var result = isXEvenlyDivisibleByY(99,3)
// console.log(result)

function countVowels(word){
    var vowels = "aeiouy"
    var count = 0
    for (i=0;i<=word.length;i++){
        if (vowels.indexOf(word[i])>=0){
            count += 1
        }
    }
    return count
}

// var result = countVowels('stealing');
// console.log(result);

function findWdi(arr){
    return (arr.indexOf('wdi')>=0);
}

// findWdi([9,'Bart Simpson', true, 'wdi'])
// findWdi(['a','b','c'])

function printTriangle(length){
    var x = ''
    for (var i = 0; i<length; i++){
        x += '*';
        console.log(x);
    }
}

//printTriangle(5)

function printPyramid(length){
    var x = ''
    for (j = 0;j<length-1;j++){
        x+=' '
    }
    for (var i = 0; i<length; i++){
        x = x.slice(1)
        x += ' *';
        console.log(x);
    }
}

//I wrote the below to figur out what the correct spacing is.
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
// * * * * * *
//printPyramid(10)
