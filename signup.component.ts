import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { signUp } from './signup';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../CustomerNavbar/navbar/navbar.component';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NavbarComponent,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signup:signUp[]=[]

  reactivForm:FormGroup= new FormGroup({})
  constructor(private route:Router){
    this.reactivForm=new FormGroup({
      userName:new FormControl('', [Validators.required, Validators.minLength(5)]),
      email:new FormControl('', [Validators.required, Validators.email, Validators.minLength(9)]),
      password:new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^\S+$/)]),
      role:new FormControl("Admin")
    })
  }
  
 getService(){
    const servecess=localStorage.getItem("signUp")
    console.log(servecess);
    return servecess? JSON.parse(servecess):[]
  }
  onSubmit(){
    const currentValue=this.getService();
    const reactiveValue=this.reactivForm.value;
    console.log(this.reactivForm.value);
    
    currentValue.push(reactiveValue);
    localStorage.setItem("signUp",JSON.stringify(currentValue));
    console.log("submitted...");
    console.log(this.reactivForm.value);
    this.route.navigate(['/login'])
  }
    
  }







































