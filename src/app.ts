import Employee, { Sex } from "./class";

function calculateNumber(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}

const numberOne: number = 10;
const numberTwo: number = 20;

console.log(calculateNumber(numberOne, numberTwo));

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

type People = {
  height?: number;
  weight?: number;
};

type Student = People & {
  name?: string;
  age?: number;
  sex?: Gender;
};

const myName: string = "PhanTaiDuc";
const myAge: number = 1000;
const myHeight: number = 1.75;
const myWeight: number = 70;
const myGender: Gender = Gender.FEMALE;
const student: Student = {
  name: "Michanel",
  height: 100,
};
const newEmployee = new Employee("Phan Duc", 100, Sex.FEMALE);
console.log(newEmployee.name);
