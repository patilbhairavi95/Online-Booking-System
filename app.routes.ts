import { Routes } from '@angular/router';
import { SignupComponent } from './registerLogin/signup/signup.component';
import { LoginComponent } from './registerLogin/login/login.component';
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



export const routes: Routes = [
    {path:"signup",component:SignupComponent},
    {path:"login",component:LoginComponent},
    {path:"Add",component:AddComponent},
    {path:"show-services",component:ShowServicesComponent},
    {path:"update",component:UpdateComponent},
    { path:"" ,component:ViewComponent},
    {path:"booking",component:BookingComponent},
    {path:"clientp",component:ClientpComponent},
    {path:"cart",component:CartComponent},
    {path:"about",component:AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"view",component:ViewComponent},
    {path:"Testimonial",component:TestimonialComponent},
    {path:"servicepage",component:ServicepageComponent},
    {path:"payment",component:PaymentComponent}

  
    
];
