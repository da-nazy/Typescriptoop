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

// Derived / Child Class / Same Shape
export class Dog implements Animal{
    
     age: number=0;
     legs:number=0;
     name:string='';

    woof():string{
        return 'WOOF! WOOF! WOOF!';
    }
}