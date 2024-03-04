// EXAMPLE 1 - Convert an Array of Objects to a Map in JavaScript

const arr = [
  {key: 'name', value: 'bobby hadz'},
  {key: 'country', value: 'Chile'},
];

const map1 = new Map(
  arr.map(obj => {
    return [obj.key, obj.value];
  }),
);

// ️👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Array of Objects to a Map using `forEach()`

// const arr = [
//   {key: 'name', value: 'bobby hadz'},
//   {key: 'country', value: 'Chile'},
// ];

// const map1 = new Map();

// arr.forEach(obj => {
//   map1.set(obj.key, obj.value);
// });

// // ️👇️ { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Array of Objects to a Map using `reduce()`

// const arr = [
//   {key: 'name', value: 'bobby hadz'},
//   {key: 'country', value: 'Chile'},
// ];

// const map1 = arr.reduce((accumulator, obj) => {
//   return accumulator.set(obj.key, obj.value);
// }, new Map());

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert a two-dimensional array to a Map in JavaScript

// const arr = [
//   ['name', 'bobby hadz'],
//   ['country', 'Chile'],
// ];
// const map1 = new Map(arr);

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(map1);
