import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimatingCount } from '../animating-count.component';

declare var $: any;

// CountUpDirective


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule,AnimatingCount],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent   {
 
  

}
