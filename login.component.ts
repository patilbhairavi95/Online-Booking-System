import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { signUp } from '../signup/signup';
import { NavbarComponent } from '../../CustomerNavbar/navbar/navbar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 reactiveLoginform:FormGroup=new FormGroup({})
 constructor(private rout:Router){
  this.reactiveLoginform = new FormGroup({
    userName:new FormControl('', [Validators.required,Validators.minLength(5)
      ]),
    password:new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern(/^\S+$/) 
      ])
  })
 }
 login(){
  const  servecess:signUp[]=JSON.parse(localStorage.getItem('signUp')|| '[]');
  const{userName,password}=this.reactiveLoginform.value;
  const  user= servecess.find((u:signUp)=>
  u.userName===userName && u.password===password
  );
  if (user) {
    if (user.role==='Admin') {
      this.rout.navigate(['/Add']);
    } else if(user.role == 'customer'){
      this.rout.navigate(['']);
    }else if(user.role == ''){
      this.rout.navigate(['/clientp']);
    }
  } else {
    alert('Invalid username or password!');
  }
 }
}

