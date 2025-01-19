export class services{
    serviceId:number;
    serviceName:string;
    servicePrice:number;
    serviceImage:string;
    serviceDescription:string;
    serviceCategory:string;
    constructor(id:number,name:string,price:number,image:string,desc:string,category:string){
    this.serviceId=id;
    this.serviceName=name;
    this.servicePrice=price;
    this.serviceImage=image;
    this.serviceDescription=desc;
    this.serviceCategory=category;
    }


}
