export class BookingForm{
    customerName:string;
    pinCode:number;
    area:string
    roomNo:number
    phoneNumber:number;
    totalPrice:number;
    count:number;
    serviceId:number;


    constructor(name:string,pincode:number,area:string,roonno:number,phoneno:number,totalprice:number,count:number,serviceid:number){
        this.customerName=name;
        this.pinCode=pincode;
        this.area=area;
        this.roomNo=roonno;
        this.phoneNumber=phoneno;
        this.totalPrice=totalprice;
        this.count=count;
        this.serviceId=serviceid;
    }
}