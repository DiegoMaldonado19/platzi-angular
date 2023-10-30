const username: string = 'Diego Maldonado';

const sum = (a: number, b: number) => {
  return a+b;
}

sum(1,10);

class Person {
  private age: number = 0;
  private lastName: string = '';

  constructor(age: number, lastName: string){
      this.age = age;
      this.lastName = lastName;
  }

  public get getAge(): number{
    return this.age;
  }

  public set setAge(newAge: number){
    this.age = newAge;
  }

  public get getLastName(): string{
    return this.lastName;
  }

  public set setLastName(newLastName:  string){
    this.lastName = newLastName;
  }

}

const nico = new Person(25, 'maldonado');

nico.setAge = 15;

console.log(nico.getAge);
