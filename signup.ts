export class signUp{
    userName:string;
    email:string;
    password:string;
    role:string;

    constructor( uname:string,email:string,pass:string,role:string){
       this.userName=uname;
       this.email=email;
       this.password=pass;
       this.role=role;
    }
}