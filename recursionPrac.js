//Problem 1

//input - number of sheep you have
//output - message with number
//input of recursive - number of sheep you have minus 1
//output - total number of sheep that have jumped


// function countingSheep(num){
//   if( num === 0)
//     return '';
//   else{
//     console.log(num,'Another sheep jumps over the fence');
//     return countingSheep(num - 1);
//   }
// }

//countingSheep(5);

//Problem 2
//input - arry of numbers
//output - array of numbers with doubled value
//recursive input - array of elments minus first element
//recursive output - array first element doubled

// function arrayDouble(arr){
//   if (!arr.length)
//     return [];
//   else {
//     let newArr = arr[0] * 2;
//     return [newArr, ...arrayDouble(arr.slice(1))];
//   }
// }
//
// console.log(arrayDouble([5,8,10]));


//Problem 3
//input - string
//output - reversed string
//recursive input - string excluding the last char
//recursive output - last char + entire string excluding last char

// function reverseString(str){
//   if(!str.length)
//     return '';
//   return str.charAt(str.length-1) + reverseString(str.slice(0,str.length-1));
// }

//input - string
//output - reversed string
//recursive input - string excluding the first char
//recursive output - entire string excluding last char + first char

// function reverseString(str){
//   if(!str.length)
//     return '';
//   return reverseString(str.slice(1)) + str.charAt(0);
// }

// reverseString('slip');

//Problem 4
//input - nth number
//output - nth triangular number
//recursive input - nth number - 1
//recursive output - nth number adding sum of the next couple nth number-1 until it reaches 1

// function nthTriangular(num){
//   if(num === 1)
//     return 1;
//   return num + nthTriangular(num-1);
// }

// nthTriangular(9);

//Problem 5
//input - string, what to take out
//output - array without what we took out
//recursive input - string, everything after what we take out
//recurisve output - array of strings without what we took out

// function splitter(str, split){
//   if(str.indexOf(split) === -1 || split === '')
//     return [str];
//   return [str.slice(0, str.indexOf(split)), ...splitter(str.slice(str.indexOf(split)+ 1), split)];
// }
//
// console.log(splitter('A B', ''));

//Problem 6
//input - number
//output - binary rep of number
//recursive input - number minus converted number of binary rep
//recursive output - binary rep of number
// function binary(num, power = 7){
//   if(num === 0)
//     return '';
//   else if( num - Math.pow(2, power) < 0)
//     return '0' + binary(num, power - 1);
//   else
//     return '1' + binary(num - Math.pow(2, power), power - 1);
// }
//
// console.log(binary(25));
