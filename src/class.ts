export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export default class Employee {
  public name: string;
  private age: number;
  readonly sex: Sex;
  constructor(name: string, age: number, sex: Sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}
