type strArray = Array<string>;
type numArray = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3, 4, 9]);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT<number | string>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "sdf"]);
console.log(l3);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const arrXY: Array<number | string> = makeArrXY<number, string>(1, "duc");
console.log(arrXY);
