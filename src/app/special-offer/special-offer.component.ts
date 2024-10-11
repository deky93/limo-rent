import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-special-offer',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './special-offer.component.html',
  styleUrl: './special-offer.component.css'
})
export class SpecialOfferComponent {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit(): void {
    // const eventDate = new Date("2024-05-01"); // Change this to your event date
    // this.updateCountdown(eventDate);

    // setInterval(() => {
    //   this.updateCountdown(eventDate);
    // }, 1000);
  }

  // updateCountdown(eventDate: Date): void {
  //   const now = new Date();
  //   const timeDifference = eventDate.getTime() - now.getTime();

  //   this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  //   this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  //   this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  // }
}
