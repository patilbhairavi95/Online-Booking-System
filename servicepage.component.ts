import { Component } from '@angular/core';
import { ServicesService } from '../../ShowAllServices/services.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { services } from '../viewservies';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../CustomerNavbar/navbar/navbar.component';


@Component({
  selector: 'app-servicepage',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './servicepage.component.html',
  styleUrl: './servicepage.component.css'
})
export class ServicepageComponent {
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
