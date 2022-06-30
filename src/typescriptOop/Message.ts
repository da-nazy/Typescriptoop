export class Message{
    title:string='';
    private _isSent:boolean=false;
       set_isSent(value:boolean){
        if(value===true){
            this.deliveryDate=new Date();
        }

        this._isSent=value;
      }
     

      get_isSent():boolean{
        return this._isSent;
       }

    message:string='';
    deliveryDate:Date|null=null;


    constructor(title:string,message:string){
        this.title=title;
        this.message=message;
        this._isSent=false;
    }
    
  public messsageStatus():string{
        const sentMessage=this._isSent?'Has been sent':'Has not been sent';
        return`${this.message}|${sentMessage}`;
    }

    preViewMessage():string{
     return this.message.slice(0,10).concat('...');
    }
}

const message=new Message(
'New Course!!! Just $9.99!!!',
'Check out our latest course on OOP with TypeScript'
);
  message.set_isSent(false);
  console.log(message.messsageStatus());
  console.log(message.preViewMessage());
  console.log(message.get_isSent(),"setting is sent");