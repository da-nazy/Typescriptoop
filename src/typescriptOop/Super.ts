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

export class Cat extends Animal{
    
    meow():string{
        return'Meow! Hiss!'
    }
}


export class Dog implements Animal{
     age:number=0;
     legs:number=0;
     name:string='';
     woof():string{
        return 'woof! woof!'
     }
}

// clip 13