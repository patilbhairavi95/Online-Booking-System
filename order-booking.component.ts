import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-booking',
  standalone: true,
  imports: [],
  templateUrl: './order-booking.component.html',
  styleUrl: './order-booking.component.css'
})
export class OrderBookingComponent implements OnInit {
  booking: any; // This should be your booking type/interface

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Get the booking data from a service or local storage
    this.booking = JSON.parse(localStorage.getItem('bookingData') || '{}');
  }

  proceedToPayment() {
    // Navigate to the payment page and pass the booking data if needed
    this.router.navigate(['/payment'], { queryParams: { booking: JSON.stringify(this.booking) } });
  }
}
