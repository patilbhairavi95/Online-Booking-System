import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { services } from './Service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../ShowAllServices/services.service';
import { HttpClient } from '@angular/common/http';
import { __param } from 'tslib';
import { BookingServiceService } from '../booking-service.service';
import { signUp } from '../../registerLogin/signup/signup';
import { NavbarComponent } from "../../CustomerNavbar/navbar/navbar.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent  implements OnInit{
  servicesList:services[]=[
    
   
  ]
  booking_Id:number=0;
  username:string='';
  isBookingSubmitted: boolean = false;
  servicePrice:number=200;
  serviceCount:number=1;
  totalPrice:number=this.serviceCount*this.servicePrice;
  booking = {
    userName:'',
    booking_Id:this.booking_Id,
    customerName: '',
    pincode: '',
    area: '',
    phoneNo: '',
    servicePrice: this.servicePrice ,
    count:this.serviceCount,
    totalPrice: this.totalPrice,
    serviceId:0,
    custInfo:'',
    serviceInfo:'',
    serviceDate:0,
    serviceName:''
    
   
  };
  id:number=0;
  constructor(private bservices:ServicesService,private _route:Router,private servicesservices:ServicesService,private http:HttpClient,private activeroute:ActivatedRoute,
    private bookingserve:BookingServiceService,
  ){
    console.log("constructor...");

    this.activeroute.queryParams.subscribe(params=>{
      if(params['dataServiceFromView']){
        this.booking=JSON.parse(params['dataServiceFromView']);
        console.log("booking component"+this.booking);
      }
    })
   
   
    
  
    
}
   ngOnInit(): void {
    console.log("oninit..");
    this.bservices.getServices().subscribe((data:any)=>{
      console.log(data);
      this.servicesList=data;
      console.log(this.servicesList)

    })
    const  servecess:signUp[]=JSON.parse(localStorage.getItem('signUp')|| '[]');
    this.activeroute.params.subscribe(params=>{
      this.id=params['id']||0;
    })
    
    const  user= servecess.find((u:signUp)=>
     this.username=u.userName
    );
  }

  onSubmit() {
    this.totalPrice=this.booking.count*this.booking.servicePrice;
    this.booking.totalPrice=this.totalPrice;
    this.booking.userName=this.username;
    console.log('Booking submitted:', this.booking);
    this.bookingserve.addBooking(this.booking).subscribe((data:any)=>{
      console.log("data",data);
      
    },(error:any)=>{
      console.log(error);
      if(error.status===200){
        this.isBookingSubmitted= true;
        
      }
      
    })
    console.log('Selected Service ID:', this.booking.serviceId);
    
   
  }
  gocart() {
    // Navigate to payment page and pass booking info if necessary
    this._route.navigate(['/cart'], { queryParams: { booking: JSON.stringify(this.booking) } });
  
  
}

}


  
  
