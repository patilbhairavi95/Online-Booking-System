// // import { CommonModule } from '@angular/common';
// // import { Component, OnInit } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// // import { pipe } from 'rxjs';
// // import { ServicesService } from '../../ShowAllServices/services.service';
// // import { HttpClient } from '@angular/common/http';
// // import { BookingServiceService } from '../../CustomerServiceBooking/booking-service.service';
// // import { ServicesCartService } from '../services-cart.service';

// // @Component({
// //   selector: 'app-cart',
// //   standalone: true,
// //   imports: [RouterModule,FormsModule,CommonModule],
// //   templateUrl: './cart.component.html',
// //   styleUrl: './cart.component.css'
// // })
// // export class CartComponent implements OnInit {
 

// //   booking_Id:number=0;
// //   username:string='';
// //   isBookingSubmitted: boolean = false;
// //   servicePrice:number=200;
// //   serviceCount:number=1;
// //   totalPrice:number=this.serviceCount*this.servicePrice;
// //   booking = {
// //     userName:'',
// //     booking_Id:this.booking_Id,
// //     customerName: '',
// //     pincode: '',
// //     area: '',
// //     phoneNo: '',
// //     servicePrice: this.servicePrice ,
// //     count:this.serviceCount,
// //     totalPrice: this.totalPrice,
// //     serviceId:0,
// //     custInfo:'',
// //     serviceInfo:'',
// //     serviceDate:0,
// //     serviceName:''
    
   
// //   };
// //   constructor(private bservices:ServicesService,private _route:Router,private servicesservices:ServicesService,private http:HttpClient,private activeroute:ActivatedRoute,
// //     private bookingserve:BookingServiceService,private cartService:ServicesCartService){}
// //   ngOnInit(): void {
   
// //   }

// // }
// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { ServicesService } from '../../ShowAllServices/services.service';
// import { HttpClient } from '@angular/common/http';
// import { BookingServiceService } from '../../CustomerServiceBooking/booking-service.service';

// import { __param } from 'tslib';
// import { signUp } from '../../registerLogin/signup/signup';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [RouterModule, FormsModule, CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   bookingId: number = 0; // The booking ID to fetch details
//   booking_Id:number=0;
//   username:string='';
//   isBookingSubmitted: boolean = false;
//   servicePrice:number=200;
//   serviceCount:number=1;
//   totalPrice:number=this.serviceCount*this.servicePrice;
//     booking = {
//         userName:'',
//         booking_Id:this.booking_Id,
//         customerName: '',
//         pincode: '',
//         area: '',
//         phoneNo: '',
//         servicePrice: this.servicePrice ,
//         count:this.serviceCount,
//         totalPrice: this.totalPrice,
//         serviceId:0,
//         custInfo:'',
//         serviceInfo:'',
//         serviceDate:0,
//         serviceName:''
        
       
//       };
// id:any
//   constructor(
//     private router: Router,
//     private activatedRoute: ActivatedRoute,
//    private bookingservice:BookingServiceService
//   ) {
    
//   }

//   ngOnInit(): void {
//     this.bookingservice.getBooking().subscribe((data:any)=>
//       {
//         console.log(data);
//         this.bookingservice=data;
//         console.log(this.bookingservice)
//       })
//     const  servecess:signUp[]=JSON.parse(localStorage.getItem('services')|| '[]');
//     this.activatedRoute.params.subscribe(params=>{
//       this.id=params['id']||0;
//   });
//   const  user= servecess.find((u:signUp)=>
//     this.username=u.userName
//    );
// }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookingServiceService } from '../../CustomerServiceBooking/booking-service.service';
import { signUp } from '../../registerLogin/signup/signup';
import { NavbarComponent } from "../../CustomerNavbar/navbar/navbar.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  username: string = ''; // Username from local storage
  booking_Id:number=0;
  userName:string='';
  isBookingSubmitted: boolean = false;
  servicePrice:number=200;
  serviceCount:number=1;
  totalPrice:number=this.serviceCount*this.servicePrice;
  booking = [{
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
    
   
  }]; // To store fetched booking data
  id: number = 0; // Booking ID from route params

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingServiceService
  ) {}

  ngOnInit(): void {
    // Fetch username from localStorage
    const services: signUp[] = JSON.parse(localStorage.getItem('signUp') || '[]');
    const user = services.find((u: signUp) => u.userName);

    if (user) {
      this.username = user.userName;

      // Fetch booking details by username
      this.bookingService.getBookingByUsername(this.username).subscribe(
        (data: any) => {
          // this.booking = data; // Store the fetched booking data
          this.booking=data;
          console.log('Fetched Booking Data:',this.booking);
        },
        (error: any) => {
          console.error('Error fetching booking data:', error);
        }
      );
    }

    // Fetch ID from route parameters
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'] || 0;
    });
  }
  proceedToPayment(): void {
    this.router.navigate(['/payment'], { state: { bookingInfo: this.booking } });
  }
}

