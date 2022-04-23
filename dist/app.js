"use strict";
const last = (arr) => arr[arr.length - 1];
const l1 = last([1, 2, 3, 4, 9]);
const lastT = (arr) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "sdf"]);
console.log(l3);
const makeArrXY = (x, y) => [x, y];
const arrXY = makeArrXY(1, "duc");
console.log(arrXY);
