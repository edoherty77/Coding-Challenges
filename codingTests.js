
//COUNTING VALLEYS PROBLEM
//https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
// function countingValleys(n, s){
// 	var step = 0;
// 	var arr = [];
// 	var valley = 0;


// 	var str = s.split('')
// 	for(var i = 0; i < str.length; i++){
// 		if(str[i] === "U"){
// 			step++;
// 			arr.push(step);
			
// 		} else {
// 			step--;
// 			arr.push(step);
// 		}
// 	}

// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] === -1 && arr[i + 1] === 0){
// 			valley++
// 		}
// 	}

// 	console.log(arr)
// 	return valley
// }



////////////////////////////////////////////////////////////


//STEPS PROBLEM FROM UDEMY COURSE
// Write a function that accepts a positive number N.
// The function shoud console og a step shape with N leves using the # character
// Make sure the step has spaces on the right hand side

// Example
// steps(4)
//    '#   '
//    '##  '
//    '### '
//    '####'


//  function steps(n){
//  	for(let row = 0; row < n; row++){
//  		let stair = '';


//  		for(let column = 0; column < n; column++){
//  			if(column <=row){
//  				stair += '#';
//  			} else {
//  				stair += ' ';
//  			}
//  		}
//  		console.log(stair);
//  	}
//  }


////////////////////////////////////////////////////////////



 //PYRAMID QUESTION
 // Write a funtion that accepts a positive number N
 // The function should console log a pyramid shape with N levels using the
 // character #. Make sure the pyramid has spaces on both the left and right hand
 // sides

// Example
// pyramid(3)
// '  #  '
// ' ### '
// '#####'

//  function pyramid(n) {
// 	for(let row = 0; row < n; row++){
// 		let level = '';

// 		for(let column = 0; column < ((2*n) - 1); column++){
// 			if(column === Math.floor((2*n - 1) / 2)){
// 				level += '#';
// 			} else {
// 				level += ' ';
// 			}
// 		}
// 		console.log(level)
// 	}
// }



////////////////////////////////////////////////////////////


//JUMPING ON CLOUDS PROBLEM
//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


// function jumpingOnClouds(c){
// 	var zeros = 0;
// 	var skippedJump = 0;

// 	for(var i = 0; i < c.length; i++){
// 		if(c[i] === 0){
// 			zeros++
// 		}
// 	}
	
// 	for(var i = 0; i < c.length; i++){
// 		if(c[i] != 1 && c[i + 1] === 0 && c[i + 2] === 0){
// 			i++;
// 			skippedJump++
// 		} 
// 	}	
// 	console.log(zeros)
// 	console.log(skippedJump)
// 	var jumps = zeros - 1;
// 	return jumps - skippedJump;
// }



//////////////////////////////////////////////////////////////////
//MATRIX PROBLEM
// Write a function that accepts and integer N and returns a NxN spiral matrix

//Example
// matrix(3)
// [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 4]]

// function matrix(n) {
// 	const results = [];

// 	for(var i = 0; i < n; i++){
// 		results.push([]);
// 	}

// 	var counter = 1;
// 	var startRow = 0;
// 	var endRow = n - 1;
// 	var startColumn = 0;
// 	var endColumn = n - 1;

// 	while(startRow <= endRow && startColumn <= endColumn) {
// 		for(let i = startColumn; i <= endColumn; i++){

// 			results[startRow][i] = counter;
// 			counter++;
// 		}
// 		startRow++;

// 		for(let i = startRow; i <= endRow; i++){
// 			results[i][endColumn] = counter;
// 			counter++;
// 		}
// 		endColumn--;

// 		for(let i = endColumn; i >= startColumn; i--){
// 			results[endRow][i] = counter;
// 			counter++
// 		}
// 		endRow--;

// 		for(let i = endRow; i >= startRow; i--){
// 			results[i][startColumn] = counter;
// 			counter++
// 		}
// 		startColumn++
// 	}

// 	return results;

// }



/////////////////////////////////
//REPEATED STRING PROBLEM
//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// function repeatedString(s, n){
// 	const letter = 'a';
// 	var counter = 0;
// 	var leftOver = 0;
// 	var multiple = Math.floor(n / s.length);
// 	var remainder = n % s.length;

// 	for(let char of s){
// 		if(letter.includes(char)){
// 			counter++
// 		}
// 	}

// 	for(let i = 0; i < remainder; i++){
// 		if(letter.includes(s[i])){
// 			leftOver++
// 		}
// 	}
	// console.log(counter)
	// console.log(multiple)
	// console.log(leftOver)
	// console.log(remainder)

// 	return (counter * multiple) + leftOver;
// }

/////////////////////////////////////////////////////
//2D ARRAY PROBLEM
//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


// function hourglassSum(arr){
// 	var count = -63;
// 	for(var i = 0; i < 4; i++){
// 		for(var j = 0; j < 4; j++){
// 			var t;
// 			t = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
// 			if(t > count){
// 				count = t
// 			}
// 		}
// 	}
// 	return count;
// }		


/////////////////////////////////////////////////////
//ARRAYS: LEFT ROTATION PROBLEM
//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// function rotLeft(a,d){
// 	var arr = []
// 	var end = a.length - d;

// 	for(var i = 0; i < d; i++){
// 		arr.push(a[i]);
// 	}
// 	for(var i = a.length - 1; i >= d; i--){
// 		arr.unshift(a[i]);
// 	}
// 	return arr;
// }


/////////////////////////////////////////////////
//ARRAYS: NEW YEAR CHAOS PROBLEM
//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

// function minimumBribes(q) {
// 	var bribes = 0;
// 	var j;
// 	for(var i = 0; i < q.length; i++){
// 		const pos = q[i];
// 		const at = i + 1;
// 		if(pos - at > 2){
// 			return "Too chaotic"
// 		}
// 		for(j = pos - 2; j < i; j++){
// 			if(q[j] > pos){
// 				bribes++
// 			}
			
// 		}
// 	}
// 	return bribes;
// }


//////////////////////////////////////////////
//SORTING: BUBBLE SWAP QUESTION
//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

// function countSwaps(a) {
	
// 	var n = a.length - 1
// 	var numSwap = 0;
// 	for(var i = 0; i < a.length; i++){
// 		for(var j = 0; j < a.length - 1; j++){
// 			if(a[j] > a[j+1]){
// 				var t = a[j]
// 				a[j] = a[j+1];
// 				a[j+1] = t
// 				numSwap++
// 			}
// 			var firstElement = a[0];
// 			var lastElement = a[n];
// 		}
// 	}
// 	console.log("Array is sorted in " + numSwap + " swaps")
// 	console.log("First Element: " + firstElement)
// 	console.log("Last Element: " + lastElement)
	
// }



///////////////////////////////////////////////////
//SORTING: MARK AND TOYS PROBLEM
//https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting


// function maximumToys(prices, k){
// 	var toys = 0;
// 	var price = 0;
// 	prices.sort(function(a, b){
// 		return a-b;
// 	});
// 	for(var i = 0; i < prices.length; i++){
// 		if(price + prices[i] < k){
// 			price += prices[i]
// 			toys++
// 		}
// 	}
// 	console.log(prices)
// 	console.log(price)
// 	console.log(toys);
// }


///////////////////////////////////////////////
//STRINGS: MAKING ANAGRAMS PROBLEMS
//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


// function makeAnagram(a, b){
// 	var arr = []
// 	var counter = 0;
// 	const charMapA = buildingCharMap(a);
// 	const charMapB = buildingCharMap(b);



// 	for(let char in charMapA){
// 		if(charMapA[char] && charMapB[char]){
// 			if(charMapA[char] > charMapB[char]){
// 				counter += (charMapA[char] - charMapB[char])
// 			}
// 		} else {
// 			counter += charMapA[char]
// 		}
// 	}
// 	for(let char in charMapB){
// 		if(charMapA[char] && charMapA[char]){
// 			if(charMapB[char] > charMapA[char]){
// 				counter += (charMapB[char] - charMapA[char])
// 			}
// 		} else {
// 			counter += charMapB[char];
// 		}
// 	}
// 	return counter;
// }


// function buildingCharMap(str){
// 	const charMap = {};
// 	for(let char of str){
// 		if(!charMap[char]){
// 			charMap[char] = 1;
// 		} else {
// 			charMap[char]++
// 		}
// 	}
// 	return charMap
// }


////////////////////////////////////////////////
//FIBONACCI PROBLEM

// function fib(n) {
// 	const result = [0, 1];

// 	for(var i = 1; i < n; i++){
// 		var newNum = result[i] + result[i - 1];
// 		result.push(newNum)
// 	}
// 	return result[n];
// }

///////////////////////////////////////////
//COMPARE TRIPLETS PROBLEM
//https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen

// function compareTriplets(a, b){
// 	var arr = [];
// 	var counterA = 0;
// 	var counterB = 0;

// 	for(var i = 0; i < a.length; i++){
// 		if(a[i] > b[i]){
// 			counterA++
// 		} else if(a[i] < b[i]){
// 			counterB++
// 		}
// 	}
// 	arr.unshift(counterB);
// 	arr.unshift(counterA);
// 	return arr;
// }

//////////////////////////////////////////////////
//DIAGONAL DIFFERENCE PROBLEM
//https://www.hackerrank.com/challenges/diagonal-difference/problem

//THE INCREDIBLY LONG WAY!!!


// function diagonalDifference(arr){
// 	var right = [];
// 	var left = [];
// 	var startRow = 0;
// 	var startColumn = 0;
// 	var endRow = 0;
// 	var endColumn = 0;


// 	while(endColumn < arr.length){
		
// 		for(var i = startRow; i <= endRow; i++){
// 			for(var j = startColumn; j <= endColumn; j++){
// 				right.push(arr[i][j])
// 			}
// 		}
// 		i++
// 		j++
// 		startRow++
// 		startColumn++
// 		endRow++
// 		endColumn++
// 	}

// 	var startRowL = arr.length - 1;
// 	var startColumnL = 0;
// 	var endRowL = arr.length - 1;
// 	var endColumnL = 0;

// 	while(endColumnL < arr.length){
// 		for(var i = startRowL; i >= endRowL; i--){
// 			for(var j = startColumnL; j <= endColumnL; j++){
// 				left.push(arr[i][j])
// 			}
// 		}
// 		i--
// 		j++
// 		startRowL--
// 		startColumnL++
// 		endRowL--
// 		endColumnL++
// 	}
// 	var sumR = right.reduce(function(a, b){
// 		return a + b;
// 	})
// 	var sumL = left.reduce(function(a, b){
// 		return a + b;
// 	})
// 	return Math.abs(sumR - sumL);

// }

//THE SHORT WAY

// function diagonalDifference(arr){
// 	var right = 0;
// 	var left = 0;
// 	var length = arr.length - 1;

// 	for(var i = 0; i < arr.length; i++){
// 		right += arr[i][i];
// 		left += arr[length - i][i]
// 	}
// 	return Math.abs(left - right)
// }


/////////////////////////////////////////////
//PLUS MINUS PROBLEM
//https://www.hackerrank.com/challenges/plus-minus/problem

// function plusMinus(arr){
// 	var pos = 0;
// 	var neg = 0;
// 	var zero = 0;
// 	var total = arr.length;

// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] > 0){
// 			pos++;
// 		}
// 		if(arr[i] === 0){
// 			zero++;
// 		}
// 		if(arr[i] < 0){
// 			neg++;
// 		}
// 	}
// 	console.log((pos / total).toFixed(6))
// 	console.log((neg / total).toFixed(6))
// 	console.log((zero / total).toFixed(6))
	
// }



////////////////////////////////////////////
//STAIRCASE PROBLEM
//https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen

// function staircase(n){
// 	for(var row = 0; row < n; row++){
// 		var length = n - 1;
// 		var stair = '';

// 		for(var col = 0; col < n; col++){
// 			if(length - col > row){
// 				stair += ' ';
// 			} else {
// 				stair += '#';
// 			}
// 		}
// 		console.log(stair)
// 	}
// }

///////////////////////////////////////////////
//MINI-MAX SUM PROBLEM
//https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen


// function miniMaxSum(arr){
// 	var sort = arr.sort();
// 	var minSum = 0;
// 	var maxSum = 0;
// 	for(var i = 0; i <= arr.length - 2; i++){
// 		minSum += arr[i];
// 	}
// 	for(var i = 1; i <= arr.length - 1; i++){
// 		maxSum += arr[i];
// 	}
// 	console.log(minSum + ' ' + maxSum)
	
// }

////////////////////////////////////////////////
//BIRTHDAY CAKE CANDLES PROBLEM
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// function birthdayCakeCandles(ar){
// 	ar.sort(function(a, b){
// 		return a - b;
// 	});
// 	var counter = 1;

// 	for(var i = 0; i < ar.length - 1; i++){
// 		if(ar[i] == ar[ar.length - 1]){
// 			counter++
// 		}
// 	}
	
// 	return counter;
// }


//////////////////////////////////////////////////
//TIME CONVERSION PROBLEM
//https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// function timeConversion(s){

// 	var arr = s.slice(0, 8).split(':')
	 
	//  //if PM
	// if(s.indexOf('PM') > -1){
	// 	if(arr[0] == 12){
	// 		arr[0] = '12';
	// 	} else {
	// 		arr[0] = Number(arr[0]) + 12; 
	// 	}
	// //if not PM	
	// } else {
	// 	if(arr[0] == 12){
	// 		arr[0] = '00'
	// 	}
	// }

// 	arr[0] = (s.indexOf('PM') > -1) ?
// 			 (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
// 			 (arr[0] == 12 ? '00' : arr[0]);



// 	return arr.join(':');
// }



//////////////////////////////////////////
//QUEUE PROBLEM


// class Queue {
// 	constructor(){
// 		this.data = [];
// 	}

// 	add(record){
// 		this.data.unshift(record);
// 	}

// 	remove(){
// 		return this.data.pop();
// 	}

// 	peek(){
// 		return this.data[this.data.length - 1]
// 	}
// }

// const q = new Queue();
// q.add(5)
// q.add(6)
// q.add(3)
// q.add(10)

// console.log(q.peek())


//////////////////////////////////////////////////////
//A TALE OF TWO STACKS
//https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

// function processData(input){
// 	var inputs = input.split('\n');
// 	var cmd;
// 	var s1 = [];
// 	var s2 = [];
// 	var len;

// 	function s1Tos2(){
// 		if(s2.length === 0){
// 			len = s1.length
// 			while(len-- > 0){
// 				s2.push(s1.pop())
// 			}
// 		}
// 	}

// 	for(var i = 1, max = inputs[0]; i <= max; i++){
// 		cmd = inputs[i].split(' ')
// 		switch (cmd[0]){
// 			case '1':
// 				s1.push(cmd[1]);
// 				break;
// 			case '2':
// 				s1Tos2();
// 				s2.pop();
// 				break;
// 			case '3':
// 				s1Tos2();
// 				console.log(s2[s2.length - 1])
// 				break;
// 			default:
// 		}
// 	}
//  }


/////////////////////////////////////////////////
//COUNTING APPLES AND ORANGES
//https://www.hackerrank.com/challenges/apple-and-orange/problem

// function countApplesAndOranges(s, t, a, b, apples, oranges){
// 	var appleCount = 0;
// 	var orangeCount = 0;

// 	const apple = helper(s, t, a, apples, appleCount);
// 	const orange = helper(s, t, b, oranges, orangeCount);

// 	console.log(apple);
// 	console.log(orange);
	
// }

// function helper(s, t, treePos, arr, counter){
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] + treePos >= s && arr[i] + treePos <= t){
// 			counter++
// 		}
// 	}
// 	return counter;
// }


/////////////////////////////////////////////////////
//GRADING STUDENTS PROBLEM
//https://www.hackerrank.com/challenges/grading/problem

// function gradingStudents(grades){
// 	var roundedGrades = []
// 	let str = grades.toString().split('\,')

// 	for(var i = 0; i < str.length; i++){
// 		if(str[i] > 37){
// 			if(str[i][1] == 3 || str[i][1] == 8){
// 				str[i] = Number(str[i]) + 2
// 				roundedGrades.push(str[i])
// 			} else if(str[i][1] == 4 || str[i][1] == 9){
// 				str[i] = Number(str[i]) + 1
// 				roundedGrades.push(str[i])
// 			} else {
// 				roundedGrades.push(parseInt(str[i]))
// 			}

// 		} else {
// 			roundedGrades.push(parseInt(str[i]));
// 		}
// 	}
	

// 	return roundedGrades
// }


// function kangaroo(x1, v1, x2, v2){
// 	var jump = 0;
// 	var isEqual = 0;

// 	while(jump <= 10000){
// 		if(x1 + v1*jump === x2 + v2*jump){
// 			isEqual++
// 		}
// 		jump++
// 	}
// 	if(isEqual > 0){
// 		return 'YES'
// 	} else {
// 		return 'NO'
// 	}
// }



/////////////////////////////////////////////////
//BETWEEN TWO SETS QUESTION
//https://www.hackerrank.com/challenges/between-two-sets/problem

// function getTotalX(a, b){
// 	var arr = [];
// 	var start = a[0];
// 	var end = b[b.length - 1];
// 	var counter = 0;

// 	for(var i = start; i <= end; i++){
// 		arr.push(i)
// 	}

// 	for(var i = 0; i < arr.length; i++){
// 		if(a.every(num => arr[i] % num === 0)){
// 			if(b.every(num => num % arr[i] === 0)){
// 				counter++
// 			}
// 		}
// 	}
// 	return  counter
// }


////////////////////////////////////////////
//BREAKING RECORDS PROBLEM
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen

// function breakingRecords(scores){
// 	var maxScore = scores[0];
// 	var minScore =  scores[0];
// 	var maxScoreCount = 0;
// 	var minScoreCount = 0; 

// 	for(var i = 1; i < scores.length; i++){
// 		if(scores[i] < minScore){
// 			minScore = scores[i];
// 			minScoreCount++
// 		}
// 		if(scores[i] > maxScore){
// 			maxScore = scores[i];
// 			maxScoreCount++
// 		}
// 	}
// 	return [maxScoreCount, minScoreCount]
// }



//////////////////////////////////////////////////////
//ALTERNATING CHARACTERS PROBLEM
//https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// function alternatingCharacters(s){
// 	var arr = s.split('');
// 	var counter = 0;

	
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] == arr[i+1]){
// 			counter++
// 		}
// 	}
	
// 	return counter
// }


///////////////////////////////////////
//NEW YEAR CHAOS PROBLEM
//https://www.hackerrank.com/challenges/new-year-chaos/editorial?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// function minimumBribes(q){
// 	let counter = 0;

	//THERE ARE MAX 2 VALUES
	// let missingNumbers = []

	//N
	// for(let i = 0; i < q.length; i += 1){
	// 	const current = q[i];
	// 	const index = i + 1;

	// 	const diff = current - index;
		//IF THERTE IS MORE THAN 2 BRIBES, RETURN ERROR
		// if(diff > 2){
		// 	return "Too Chaotic"
		// }

		//REMOVE
		// let removeIndex = null;
		// missingNumbers.forEach((num, missingIndex) => {
		// 	if(current === num){
		// 		removeIndex = missingIndex;
		// 	}
		// });

		//REMOVE CURRENT NUMBER
		// if(removeIndex !== null){
		// 	missingNumbers.splice(removeIndex, 1);
		// }

		//ADD MISSING NUMBERS
		// for(let k = 0; k < diff; k += 1){
		// 	if(missingNumbers.length < 2){
		// 		const missingNumber = index + k;
		// 		let isFoundBehind = false;

		// 		for(let b = i - 1; b > i - 3; b -= 1){
		// 			if(q[b] === missingNumber){
		// 				isFoundBehind = true;
		// 				break;
		// 			}
		// 		}
		// 		if(!isFoundBehind){
		// 			missingNumbers.push(missingNumber)
		// 		}
		// 	}
		// }

		//COUNT
// 		missingNumbers.forEach((num, missingIndex) => {
// 			if(current > num){
// 				counter += 1
// 			}
// 		})
// 	}

// 	return counter

// }



// function practice(s, d, m){
// 	let counter = 0;
	
// 	if(s.length === 1 &&  m === 1){
// 		return 1
// 	}

// 	if(m > s.length){
// 		return counter
// 	}

// 	for(var i = 0; i < s.length - 1; i++){
// 		let subArray = s.slice(i, i+m)
// 		if(subArray.length === m){
// 			let sum = subArray.reduce(function(a, b){
// 				return a + b
// 			}, 0)
// 			if(sum === d){
// 				counter += 1
// 			}	
// 		}
// 	}

// 	return counter
// }


// function practice(arr){
// 	const sum = arr.reduce(function(x, y){
// 		return x + y
// 	})
// }

// Who Likes It?
// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. We want to 
// create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, 
// which must take in input array, containing the names of 
// people who like an item. It must return the display text as shown in the examples:

// likes([]) # must be "no one likes this"
// likes(["Peter"]) # must be "Peter likes this"
// likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
// likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
// likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"


// function likes(arr){
//   const others = arr.length - 2
//   if(arr.length == 0){
//     console.log('no one likes this')
//   }
//   if(arr.length == 1){
//     console.log(arr[0] + ' likes this')
//   }
//   if(arr.length == 2){
//     console.log(arr[0] + ' and ' + arr[1] + ' like this')
//   }
//   if(arr.length == 3){
//     console.log(arr[0] + ', ' + arr[1] + ' and ' + arr[2] + ' like this')
//   }
//   if(arr.length > 3){
//     console.log(arr[0] + ', ' + arr[1] + ' and ' + others + ' others like this')
//   }
// }



// Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

// function findNextSquare(num){
//   const root = Math.sqrt(num)
//   const nextNum = root + 1
//   root - Math.floor(root) !== 0 ? console.log(-1) : console.log(nextNum * nextNum)
// }




// Test Brackets
// Create a method in the language of your choice called test_brackets that takes a string and 
// determines if all brackets are correctly matching / nested (returns true or false). 
// This code could be used as part of a system to detect syntax errors in code.
// It should check for the following bracket characters within the string: [ ],{ },( )

// test_brackets('abc(123)')
// #returns true
// test_brackets('abc(123')
// #returns false -- missing closing bracket
// test_brackets('a[bc(123)]')
// #returns true
// test_brackets('a[bc(12]3)')
// #returns false -- improperly nested
// test_brackets('a{b}{c(1[2]3)}')
// #returns true
// test_brackets('a{b}{c(1}[2]3)')
// #returns false -- improperly nested
// test_brackets('()')
// #returns true
// test_brackets('[]]')
// #returns false - no opening bracket to correspond with last character
// test_brackets('abc123yay')
// #returns true -- no brackets = correctly matched


// function test_brackets(string){
//   let opening = 0
//   const arr = string.split('')
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == '(' || arr[i] == '[' || arr[i] == '{'){
//       opening = opening + 1
//     }
//     if(arr[i] == ')' || arr[i] == ']' || arr[i] == '}'){
//       opening = opening - 1
//     }
//   }
//   opening == 0 ? console.log('true') : console.log('false')
// }


//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem


// function divisibleSumPairs(n, k, ar) {
// 	let counter = 0
// 	for(let i = 0; i < ar.length; i++){
// 		for(let j = i + 1; j < ar.length; j++){
// 			console.log(ar[j])
// 		}
// 	}
// 	console.log(counter)
// }


// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])




//https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen


// function migratoryBirds(arr) {
// 	let obj = {}
// 	let max = 0
// 	let maxNum;

// 	for(let i = 0; i < arr.length; i++){
// 		if(!obj[arr[i]]){
// 			obj[arr[i]] = 1
// 		} else {
// 			obj[arr[i]]++
// 		}
// 	}
// 	for(let item in obj){
// 		if(obj[item] > max){
// 			max = obj[item]
// 			maxNum = item
// 		}
// 	}
// 	console.log(maxNum)
// }


// migratoryBirds([1, 4, 4, 4, 4, 5, 3, 3, 3, 2])



//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=false


// function getMoneySpent(keyboards, drives, b) {
//     let maxSum = 0
//     let minSum = b

//     for(let i = 0; i < keyboards.length; i++){
//         for(let j = 0; j < drives.length; j++){
//         	if(keyboards[i] + drives[j] < minSum){
//             	minSum = keyboards[i] + drives[j]
//             }
//             if((keyboards[i] + drives[j]) > maxSum && keyboards[i] + drives[j] <= b){
//             	maxSum = keyboards[i] + drives[j]
//             } 
            
//         }
//     }
//     console.log(minSum)
//     console.log(maxSum)
//     if(minSum == b) return -1
//     else return maxSum
// }

// console.log(getMoneySpent([3, 1], [5, 2, 8], 10))

/////////////////////////////////////////////////////////////////////



// https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=false&h_r=next-challenge&h_v=zen


// function formingMagicSquare(s) {


// }

// formingMagicSquare()


// https://www.hackerrank.com/challenges/js10-arrays/problem

// function getSecondLargest(nums) {
//     const newArr = nums.sort((a, b) => a - b)
//     console.log(newArr)
//     let num = newArr[newArr.length - 1]
//     for(let i = newArr.length - 1; i >= 0; i--){
//     	if(newArr[i] < num) return(newArr[i])
//     }
// }

// console.log(getSecondLargest([2, 3, 6, 6, 5]))



/////////////////////////////////////////////////////////////////////



// https://www.hackerrank.com/challenges/js10-count-objects/problem

// function getCount(objects) {
// 	let counter = 0;
//     for(let i = 0; i < objects.length; i++){
//     	for(let key in objects[i]){

//     		if(key == objects[i][key]) counter++
//     	}
//     }
//     return counter

// }



//https://www.hackerrank.com/challenges/30-review-loop/problem

// function processData(input){
//   let even = ''
//   let odd = ''

//   for(let i = 0; i < input.length; i++){
//     if(i % 2 != 0){
//       odd += input[i]
//     } else {
//       even += input[i]
//     }
//   }
//   console.log(even + ' ' + odd)
 
// }



//Find the missing number in a given integer array of 1 to 100

// const findMissingNum = (arr) => {
// 	const sortedArr = arr.sort()

// 	for(let i = sortedArr.length - 1; i > 0; i--){
// 		if(sortedArr[i] - sortedArr[i - 1] !== 1){
// 			console.log(sortedArr[i] - 1)
// 		}
// 	}
// }

// findMissingNum([2, 1, 5, 4, 3, 6, 7, 9])



///////////////////////////////////////////////////////////////////////////////////////


//Find a duplicate number in an array of integers

// const findDuplicateNum = (arr) => {
// 	const sortedArr = arr.sort()
// 	for(let i = 0; i < sortedArr.length; i++){
// 		if(sortedArr[i] === sortedArr[i + 1]){
// 			return sortedArr[i]
// 		}
// 	}
// 	return false
// }

//OR YOU CAN USE A HASH

// const findDuplicateNum = (arr) => {
// 	const observe = {}

// 	for(let i = 0; i < arr.length; i++){
// 		if(observe[arr[i]]){

// 			return arr[i]

// 		} else {
// 			observe[arr[i]] = arr[i]
// 		}
// 	}
// 	return false

// }

// OR YOU CAN USE A SET
// const findDuplicateNum = (arr) => {
// 	const nums = new Set()
// 	for(let i = 0; i < arr.length; i++){
// 		if(nums.has(arr[i])){
// 			return arr[i]
// 		} else {
// 			nums.add(arr[i])
// 		}
// 	}
// }

// console.log(findDuplicateNum([2, 4, 1, 17, 17, 6, 91]))


///////////////////////////////////////////////////////////////////////////////////////

//3. Find the largest and smallest number in an unsorted array of integers

// const findMaxMin = (arr) => {
// 	let max = arr[0]
// 	let min = arr[0]

// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] < min){
// 			min = arr[i]
// 		}
// 		if(arr[i] > max){
// 			max = arr[i]
// 		}
// 	}
// 	return {
// 		max : max,
// 		min : min
// 	}
// }

// console.log(findMaxMin([3, 23, 45, 5, 5, 18]))


///////////////////////////////////////////////////////////////////////////////////////

//4. Return an array showing the cumulative sum at each index of an array of integers


// const cumSum = (arr) => {
// 	const sumArr = []
// 	let sum = 0
// 	for(let i = 0; i < arr.length; i++){
// 		sum = sum + arr[i]
// 		sumArr.push(sum)
// 	}
// 	console.log(sumArr)
// }

// cumSum([2, 1, 3, 5, 7, 1])


///////////////////////////////////////////////////////////////////////////////////////


//5. Find all duplicate numbers in an array with multiple duplicates

// const dupNumArr = arr => {
// 	let dupArr = []

	
// }

// dupNumArr([1, 1, 2, 3, 4, 4, 4, 2, 10, 1, 11, 11, 11, 11])

//////////////////////////////////////////////////////////////////


// function twoStrings(s1, s2){
// 	const arrOne = s1.split('')
// 	const arrTwo = s2.split("")

// 	const myObj = {}

// 	for(let i = 0; i < arrOne.length; i++){
// 		if(!myObj[arrOne[i]]){
// 			myObj[arrOne[i]] = arrOne[i]
// 			console.log(myObj)
// 		} 
// 	}

// 	for(let j = 0; j < arrTwo.length; j++){
// 		if(myObj[arrTwo[j]]){
// 			return "YES"
// 		}
// 	}
// 	return "NO"
// }


// twoStrings("hello", "world")
// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
// Write a function:
// function solution(A);
// that, given an array A, returns the value of the missing element.
// For example, given array A such that:
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].


// function solution(A) {
// 	var length = A.length;
//     var sum = ((length + 1) /2) * (length + 2);

//     var sumMinusMissing = 0;
//     for (var i = 0; i < length; i++) { 
//         sumMinusMissing += (A[i]);
//     }
//     return sum - sumMinusMissing;
// }


////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////



// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
// For example, consider array A such that:
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:
// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:
// function solution(A);
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
// For example, given:
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

// function solution(A) {
//     var sumAfter = sumBefore = 0;
//     var minDiff = Number.POSITIVE_INFINITY;
    
//     A.forEach(function(value){
//         sumAfter += value;
//     });
    
//     for (var i = 1; i < A.length; i++){
//         sumBefore += A[i -1];
//         sumAfter = sumAfter - A[i -1];
//         minDiffTemp = Math.abs(sumBefore - sumAfter);
//         if (minDiffTemp < minDiff){
//             minDiff = minDiffTemp;
//         }
//     }
//     return minDiff;
// }

////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
// Count the minimal number of jumps that the small frog must perform to reach its target.
// Write a function:
// class Solution { public int solution(int X, int Y, int D); }
// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
// For example, given:
//   X = 10
//   Y = 85
//   D = 30
// the function should return 3, because the frog will be positioned as follows:
// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100
// Write an efficient algorithm for the following assumptions:
// X, Y and D are integers within the range [1..1,000,000,000];
// X ≤ Y.

// function solution(X, Y, D) {
// 	return Math.ceil((Y - X) / D);
// }


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// A non-empty array A consisting of N integers is given.
// A permutation is a sequence containing each element from 1 to N once, and only once.
// For example, array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.
// The goal is to check whether array A is a permutation.
// Write a function:
// function solution(A);
// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
// For example, given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.
// Given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].

// function solution(A) {
// 	A.sort(function(a, b) {
// 		return a-b
// 	});
// 	var length = A.length
//     var sumArr = 0;
//     var sumArith = ((length / 2) * ((2 * A[0]) + (length - 1)));

//     for(var i = 0; i < length; i++) {
//         sumArr += A[i];
//     }
//     if(sumArith - sumArr === 0) {
//     	return 1;
//     } else {
//     	return 0;
//     }
// }

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.
// You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.
// The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.
// For example, you are given integer X = 5 and array A such that:
//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.
// Write a function:
// function solution(X, A);
// that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.
// If the frog is never able to jump to the other side of the river, the function should return −1.
// For example, given X = 5 and array A such that:
//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// the function should return 6, as explained above.
// Write an efficient algorithm for the following assumptions:
// N and X are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..X].

// function solution(X, A) {
// 	let B = [];
//     let leaves_remaining = X;
    
//     for(let i in A) {
//     	leave_position = A[i]
//       	if(!B[leave_position-1]) {
//        		B[leave_position-1] = A[i];
//        		leaves_remaining--;
//         	if (leaves_remaining === 0) {
//           		return parseInt(i)
//         }    
//       }   
//     }
//     return -1

// }
////////////////////////////////////////////////////////////////////////////////////////////


// You are given N counters, initially set to 0, and you have two possible operations on them:
// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:
//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.
// Write a function:
// class Solution { public int[] solution(int N, int[] A); }
// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.
// Result array should be returned as an array of integers.
// For example, given:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.
// Write an efficient algorithm for the following assumptions:
// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].

// function solution(N, A) {
// 	let counters = [];
// 	let lastUpdate = 0;
// 	let max = 0;

// 	for(var i = 0; i < N; i++) {
// 		counters[i] = 0;
// 	}

// 	for(var i = 0; i < A.length; i++) {
// 		if(A[i] <= N) {
// 			position = A[i] - 1;
// 			if (counters[position] < lastUpdate) {
// 				counters[position] = lastUpdate + 1;
// 			} else {
// 				counters[position] = counters[position] + 1;
// 			}
// 			if(counters[position] > max) {
// 			max = counters[position];
// 			}
// 		} else {
// 			lastUpdate = max;
// 		}
// 	}

// 	for(var i = 0; i < N; i++) {
// 		if(counters[i] < lastUpdate){
// 			counters[i] = lastUpdate;
// 		}
// 	}
// 	return counters;
// }

//////////////////////////////////////////////
//////////////////////////////////////////////

// This is a demo task.
// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// function solution(A) {
// 	var arr = [];

// 	for(var i = 0; i < A.length; i++) {
// 		if(A[i] > 0) {
// 			arr[A[i]] = true;
// 		}
// 	}
// 	for(var i = 1; i <= arr.length; i++){
// 		if(!arr[i]) {
// 			return i;
// 		}
// 	}
// 	return 1;
// }

//////////////////////////////////////////////
//////////////////////////////////////////////

// A non-empty array A consisting of N integers is given. The consecutive elements of array A 
// represent consecutive cars on a road.
// Array A contains only 0s and/or 1s:
// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, 
// is passing when P is traveling to the east and Q is traveling to the west.
// For example, consider array A such that:
//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
// Write a function:
// class Solution { public int solution(int[] A); }
// that, given a non-empty array A of N integers, returns the number of pairs of passing cars.
// The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

// function solution(A) {
// 	var ones = 0;
// 	var passing = 0;

// 	for(var i = A.length - 1; i >=0; i--) {
// 		if(A[i] === 0){
// 			passing += ones;
// 			if(passing > 1000000000) {
// 				return -1;
// 			}
// 		} else {
// 			ones++
// 		}
// 	}
// 	return passing;
// }

//////////////////////////////////////////////////////////////////////////////////////////////


// Write a function:
// function solution(A, B, K);
// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
// { i : A ≤ i ≤ B, i mod K = 0 }
// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible 
// by 2 within the range [6..11], namely 6, 8 and 10.
// Write an efficient algorithm for the following assumptions:
// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.

// function solution(A, B, K) {
// 	if(A % K === 0) {
// 		return Math.floor((B- A) / (K + 1));
// 	}
// 	return Math.floor((B - (A - (A % K))) / K);
// }

//////////////////////////////////////////////////////////////////////////////////


// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.
// For example, given array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:
//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

// function solution(A) {
// 	A.sort(function(a, b) {
// 		return a - b;
// 	});

// 	for(var i = 0; i < A.length - 2; i++) {
// 		var P = i;
// 		var Q = i + 1;
// 		var R = i + 2;
// 		var condition1 = A[P] + A[Q] > A[R];
// 		var condition2 = A[P] + A[R] > A[Q];
// 		var condition3 = A[R] + A[Q] > A[P];
// 		if(condition1 && condition2 && condition3) {
// 			return 1;
// 		}
// 	}
// 	return 0;

// }

//////////////////////////////////////////////////////////////////////////


// Write a function
// function solution(A);
// that, given an array A consisting of N integers, returns the number of distinct values in array A.
// For example, given array A consisting of six elements such that:
//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// function solution(A) {
// 	A.sort(function(a, b) {
// 		return a - b;
// 	})
// 	var distinct = 0;

// 	for(var i = 0; i < A.length; i++) {
// 		if(A[i] != A[i + 1]) {
// 			distinct += 1
// 		}
// 	}
// 	return distinct;
// }



//////////////////////////////////////////////////////////////////////


// An array A consisting of N integers is given. The dominator of array A is the value that 
// occurs in more than half of the elements of A.
// For example, consider array A such that
//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) 
// and 5 is more than a half of 8.
// Write a function
// class Solution { public int solution(int[] A); }
// that, given an array A consisting of N integers, returns index of any element of array A 
// in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.
// For example, given array A such that
//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// the function may return 0, 2, 4, 6 or 7, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

// function solution(A) {
//     const numMap = {};
//     let maxNum = 0;
//     let leaderCount = 0;
    
//     A.forEach(function(num) {
//         if(numMap[num]) {
//             numMap[num]++;
//         } else {
//             numMap[num] = 1;
//         }
//     });

//     for(let num in numMap) {
//         if(numMap[num] > maxNum) {
//             maxNum = numMap[num];
//             maxNum = num;
//         }
//     }
    
// }

/////////////////////////////////////////
/////////////////////////////////////////

// A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns the maximum sum of any slice of A.
// For example, given array A such that:
// A[0] = 3  A[1] = 2  A[2] = -6
// A[3] = 4  A[4] = 0
// the function should return 5 because:
// (3, 4) is a slice of A that has sum 4,
// (2, 2) is a slice of A that has sum −6,
// (0, 1) is a slice of A that has sum 5,
// no other slice of A has sum greater than (0, 1).
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..1,000,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000];
// the result will be an integer within the range [−2,147,483,648..2,147,483,647].

// function solution(N) {
// 	var arr = []
// 	var len = N
//     var push = Math.ceil(Math.random() * 1000);
//     for(var i = 0; i < len; i++) {
//     	arr[i] = Math.ceil(Math.random() * 1000);
//     }
//     return arr;
// }

const output = findNextSquare(121)
console.log(output)