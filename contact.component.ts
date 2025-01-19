import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../CustomerNavbar/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
