import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './registerLogin/signup/signup.component';
import { LoginComponent } from './registerLogin/login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AddComponent } from './AddServices/add/add.component';
import { ShowServicesComponent } from './ShowAllServices/show-services/show-services.component';
import { UpdateComponent } from './updateService/update/update.component';
import { ViewComponent } from './ViewHome/view/view.component';
import { BookingComponent } from './CustomerServiceBooking/booking/booking.component';

import { ClientpComponent } from './client/clientp/clientp.component';
import { CartComponent } from './Cart/cart/cart.component';
import { AboutComponent } from './About/about/about.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServicepageComponent } from './servicepage/servicepage/servicepage.component';
import { PaymentComponent } from './payment/payment/payment.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignupComponent,LoginComponent,NavbarComponent,SidebarComponent,AddComponent,
    ShowServicesComponent,UpdateComponent,ViewComponent,NavbarComponent,BookingComponent,ClientpComponent,
    CartComponent,AboutComponent,ContactComponent,TestimonialComponent,ServicepageComponent,PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineBookingService';
}
