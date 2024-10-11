import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MainComponent,RouterLinkActive,RouterLink,HeaderComponent,FooterComponent,CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mobileAdLimoRent';
  cookiesChecked: boolean = false;
  cookiesAccepted: boolean = false;

  ngOnInit(): void {
    this.checkCookies();
  }

  checkCookies(): void {
    if (typeof localStorage != "undefined") {
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      console.log(cookiesAccepted);
      console.log(!!cookiesAccepted);
      this.cookiesAccepted = !!cookiesAccepted; // Convert to boolean
      this.cookiesChecked = true; // Indicate that the check is complete
    }
   
  }

  openWhatsApp() {
    window.open('https://wa.me/381631437043', '_blank');
  }
}
