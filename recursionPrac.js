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
