const username: string | number = "Daniel";

// func
const sum = (a: number, b:number)=>{
  return a+b;
}
sum(1, 2);

class Person{
  age: number;
  lastName: string;
  constructor(age:number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
}

const daniel: Person = new Person(21, "Pinto");

class Person2{
  constructor(public age:number, public lastName: string){ }
}
