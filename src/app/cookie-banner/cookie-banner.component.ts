import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent implements OnInit {
  cookiesAccepted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  

  acceptCookies() {
    // Set a flag in local storage indicating that cookies have been accepted
    localStorage.setItem('cookiesAccepted', 'true');
    this.cookiesAccepted = true;
  }
}
