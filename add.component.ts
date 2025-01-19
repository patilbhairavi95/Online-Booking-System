import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { services } from '../../ShowAllServices/showServices';
import { ServicesService } from '../../ShowAllServices/services.service';
import { NavbarComponent } from "../../navbar/navbar/navbar.component";
import { SidebarComponent } from "../../sidebar/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NavbarComponent, SidebarComponent,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

reactiveForm:FormGroup=new FormGroup({serviceName:new FormControl(""),
  servicePrice:new FormControl(""),
  serviceImage:new FormControl(""),
  serviceDescription:new FormControl(""),
  serviceCategory:new FormControl(""),
})
constructor(private Services:ServicesService){

}

addService(){
  console.log(this.reactiveForm.value);
  alert("product added succefully");
  this.Services.addServices(this.reactiveForm.value).subscribe((data:any)=>{
    console.log(data);
  })
  
}
}
  
     
    
  
