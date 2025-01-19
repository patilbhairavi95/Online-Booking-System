import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServicesService } from '../../ShowAllServices/services.service';
import { HttpClient } from '@angular/common/http';
import { services } from '../../ShowAllServices/showServices';
import { NavbarComponent } from '../../CustomerNavbar/navbar/navbar.component';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [ RouterModule,NavbarComponent,CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  servicesList:services[]=[]
  servData:any[]=[]
 
   constructor(private bservices:ServicesService,private _route:Router,private servicesservices:ServicesService,private http:HttpClient){
    console.log("constructor...");
    this.bservices.getServices().subscribe((data:any)=>
      {
        console.log(data);
        this.servicesList=data;
        this.servData = data;
        console.log(this.servicesList);
      })
    
   }
 
   

  ngOnInit(): void {
   console.log("oninit..");
   this.bservices.getServices().subscribe((data:any)=>
  {
    console.log(data);
    this.servicesList=data;
    this.servData = data;
    console.log(this.servicesList);
  })
  }

  booking(booking:any){
    
const servicedeta=JSON.stringify(booking);
console.log(servicedeta);

this._route.navigate(['/booking'],{queryParams:{dataServiceFromView:servicedeta}});
  }
}
