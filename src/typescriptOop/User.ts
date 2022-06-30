export class User{
 firstName:string='';
 lastName:string='';
 email:string='';

 constructor(firstName:string,lastName:string,email:string){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
 }
  
 get fullName():string{
    return 'Whatever';
 }
 getFullname():string{
    return `${this.firstName} ${this.lastName}`
 }

 emailCheck():boolean{
    let emailReg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailReg.test(String(this.email).toLowerCase());
 }

}

const user=new User('Ani','Daniel','danielani66n');
 console.log(user.fullName);
 console.log(user.emailCheck());