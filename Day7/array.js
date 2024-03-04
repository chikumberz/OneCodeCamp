console.log('Array');

let fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits);
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

fruits[1] = 'grape';

// console.log(fruits);
fruits.push('strawberry');
// console.log(fruits);
// console.log(fruits.pop());

fruits.unshift('strawberry');
// console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log('Fruits:', fruits[i]);
}

fruits.forEach( function (fruit) {
    // console.log('Fruit:', fruit);
});

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log('Index Of: 3', numbers.indexOf(3));
console.log('Index Of: fruit[banana]', fruits.indexOf('orange'));
console.log('Includes number 5:', numbers.includes(6))

console.log(`test ${fruits[0]}`);

console.log('Joined array:', numbers.join('/'));

let slice_array = numbers.slice(1, -2);
console.log('Slice Array', slice_array);

let splice_array = numbers.splice(2, 3);
console.log('Splice Array', splice_array);
// console.log(numbers);