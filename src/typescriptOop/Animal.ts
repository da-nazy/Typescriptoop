// Base / Parent Class
export class Animal{
    age:number=0;
    legs:number=0;
    name:string='';
    constructor(age:number,legs:number,name:string){
        this.age=age;
        this.legs=legs;
        this.name=name;
    }
}

//Derived / Child class(s)

export class Dog extends Animal{
woof():string{
    return 'WOOF WOOF!'
}
}

const dog=new Dog(2,4,'Gator');
console.log(dog.woof());

export class Cat extends Animal{
  meow():string{
    return 'MEOW! MEOW! HISS!';
  }
}

const cat =new Cat(19,4,'Baby');
cat.age;
cat.meow();