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

//Problem 6 ( have to check power)
//input - number, power
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


//Problem 7
//input - string, prefix
//output - array of anagrams for that string
//recursive input - letters not used and the prefix
//recursive output - prefix + recursive function
// function anagram(str,prefix){
//   if(str.length <= 1){
//     //should log out anagram
//     console.log(prefix+str);
//   }
//   else{
//     for(let i = 0; i< str.length; i++){
//       let x = str.substring(i,i+1);
//       anagram(str.slice(0,i) + str.slice(i+1), x+prefix);
//     }
//   }
// }

// anagram('east', '');

//Problem 8
//input - arr of obj, string
//output - obj of obj (tree)
//recursive input - initial array, current item id ( new parent)
//recursive output - object
// const AnimalHierarchy = [
//     {id: 'Animals','Parent': null},
//     {id: 'Mammals','Parent': 'Animals'},
//     {id: 'Dogs','Parent':'Mammals' },
//     {id: 'Cats','Parent':'Mammals' },
//     {id: 'Golden Retriever','Parent': 'Dogs'},
//     {id: 'Husky','Parent':'Dogs' },
//     {id: 'Bengal','Parent':'Cats' }
// ]

// // ==============================
// function traverse(AnimalHierarchy, parent) {
//     let node = {};
//     AnimalHierarchy.filter(item => item.Parent === parent)
//                    .forEach(item => node[item.id] = traverse(AnimalHierarchy, item.id));
//     return node;
// }
// console.log(traverse(AnimalHierarchy, null));

//Problem 9
//input - number
//output - result factoral number
//recursive input - num-1
//recursive output - num * recursive(num-1)
// function factorial(num){
//   if(num===1){
//     return 1;
//   }
//   return num * factorial(num-1);
// }
// factorial(5);

//Problem 10
// input - number
// output - fiboncai of current number
// input recursive - number
// output recurisive - number + recursive(number)

// function fibonccai(num){
//   if(num <= 0)
//     return 0;
//   if(num === 1)
//     return 1;
//   return fibonccai(num - 1) + fibonccai(num -2);
// }
// console.log(fibonccai(5));

//Problem 11
//input - array of objects
//output - organizational chart
//input recursive - array of Objects and array id
//output recursive - current parent object with child key value pairs

// let chart = [
//   {id: 'Zuckerberg', Boss: null},
//   {id: 'Schroepfer', Boss: 'Zuckerberg'},
//   {id: 'Bosworth', Boss: 'Schroepfer'},
//   {id: 'Steve', Boss: 'Bosworth'},
//   {id: 'Kyle', Boss: 'Bosworth'},
//   {id: 'Andra', Boss: 'Bosworth'},
//   {id: 'Zhao', Boss: 'Schroepfer'},
//   {id: 'Richie', Boss: 'Zhao'},
//   {id: 'Sophia', Boss: 'Zhao'},
//   {id: 'Jen', Boss: 'Zhao'},
//   {id: 'Schrnge', Boss: 'Zuckerberg'},
//   {id: 'VanDyck', Boss: 'Schrnge'},
//   {id: 'Sabrina', Boss: 'VanDyck'},
//   {id: 'Michelle', Boss: 'VanDyck'},
//   {id: 'Josh', Boss: 'VanDyck'},
//   {id: 'Swain', Boss: 'Schrnge'},
//   {id: 'Blanch', Boss: 'Swain'},
//   {id: 'Tom', Boss: 'Swain'},
//   {id: 'Joe', Boss: 'Swain'},
//   {id: 'Sandberg', Boss: 'Zuckerberg'},
//   {id: 'Goler', Boss: 'Sandberg'},
//   {id: 'Eddie', Boss: 'Goler'},
//   {id: 'Julie', Boss: 'Goler'},
//   {id: 'Annie', Boss: 'Goler'},
//   {id: 'Hernandez', Boss: 'Sandberg'},
//   {id: 'Rowi', Boss: 'Hernandez'},
//   {id: 'Inga', Boss: 'Hernandez'},
//   {id: 'Morgan', Boss: 'Hernandez'},
//   {id: 'Moissinac', Boss: 'Sandberg'},
//   {id: 'Amy', Boss: 'Moissinac'},
//   {id: 'Chuck', Boss: 'Moissinac'},
//   {id: 'Vinni', Boss: 'Moissinac'},
//   {id: 'Kelly', Boss: 'Sandberg'},
//   {id: 'Eric', Boss: 'Kelly'},
//   {id: 'Ana', Boss: 'Kelly'},
//   {id: 'Wes', Boss: 'Kelly'},
// ];
//
//
// function orgChart(chart, boss){
//   let node = {};
//   chart.filter(people => people.Boss === boss)
//     .forEach(people => node[people.id] = orgChart(chart, people.id));
//   return node;
// }
//
// console.log(JSON.stringify(orgChart(chart, null),null, 4));
