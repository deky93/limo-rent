import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LimosService } from '../limos.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CarouselModule,YouTubePlayerModule,RouterLinkActive,RouterLink],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //host: {ngSkipHydration: 'true'},
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  limos:any[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    center: true,
    lazyLoad: true,
    autoplay: true,
    margin: 30,
    autoHeight:true,
    autoWidth:true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:2
      }
  },
    nav: true
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: false,
    center: true,
    lazyLoad: true,
    autoplay: true,
    margin: 30,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [],
    responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  },
    nav: false
  }
  cars: any[] = [
    { description: 'Car 1', picture: 'galerija-slika1.jpg' },
    { description: 'Car 1', picture: 'galerija-slika2.jpg' },
    { description: 'Car 1', picture: 'galerija-slika3.jpg' },
    { description: 'Car 1', picture: 'galerija-slika4.jpg' },
    { description: 'Car 1', picture: 'galerija-slika5.jpg' },
    { description: 'Car 1', picture: 'galerija-slika6.jpg' },
    { description: 'Car 1', picture: 'galerija-slika7.jpg' },
    { description: 'Car 1', picture: 'galerija-slika8.jpg' },
    { description: 'Car 1', picture: 'galerija-slika9.jpg' },
    { description: 'Car 1', picture: 'galerija-slika10.jpg' },
    { description: 'Car 1', picture: 'galerija-slika11.jpg' },
    { description: 'Car 1', picture: 'galerija-slika12.jpg' },
    { description: 'Car 1', picture: 'galerija-slika13.jpg' },
    { description: 'Car 1', picture: 'galerija-slika14.jpg' },
    { description: 'Car 1', picture: 'galerija-slika15.jpg' },
    //{ description: 'Car 1', picture: 'galerija-slika16.jpg' },
    { description: 'Car 1', picture: 'galerija-slika17.jpg' },
    { description: 'Car 1', picture: 'galerija-slika18.jpg' },
    { description: 'Car 1', picture: 'galerija-slika19.jpg' },
    { description: 'Car 1', picture: 'galerija-slika20.jpg' },
    { description: 'Car 1', picture: 'galerija-slika21.jpg' },
    { description: 'Car 1', picture: 'galerija-slika22.jpg' },
    { description: 'Car 1', picture: 'galerija-slika23.jpg' },
    { description: 'Car 1', picture: 'galerija-slika24.jpg' },
    { description: 'Car 1', picture: 'galerija-slika25.jpg' },
    { description: 'Car 1', picture: 'galerija-slika26.jpg' },
    { description: 'Car 1', picture: 'galerija-slika27.jpg' },
    { description: 'Car 1', picture: 'galerija-slika28.jpg' },
    { description: 'Car 1', picture: 'galerija-slika29.jpg' },
    { description: 'Car 1', picture: 'galerija-slika30.jpg' },
  ];

  youtubeUrl: string = "";
  safeURL: any;
  youTubeplayerWidth:any;
  containerWidth: number;

  @ViewChild('playerContainer') playerContainer?: ElementRef<HTMLDivElement>;
  player: any; // Placeholder for the YouTube IFrame Player
  showPlayer: boolean = false;

  selectedCar: any;
  showPreview: boolean = false;
  showCloseButton: boolean = false;


  constructor(private router: Router,private limoService:LimosService) {}



  ngOnInit() {
    this.limos = this.limoService.getLimos();
  }

  selectCar(car: any) {
    this.limoService.setSelectedCar(car);
  }
  


  ngAfterViewInit() {
    // Initialize the YouTube IFrame Player
    // Initialize the YouTube IFrame Player when showPlayer is true
    console.log(this.showPlayer);
    
    if (this.showPlayer && this.playerContainer !== undefined) {
      this.initPlayer();
    }
  }

  onPlayerReady(event: any) {
    // Player is ready, you can now control it
    console.log('Player is ready');
  }

  initPlayer(){
    if (this.playerContainer !== undefined) {
      this.player = new window['YT'].Player(this.playerContainer!.nativeElement, {
        videoId: 'wJH081pI5tk', // Default video ID
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this)
        }
      });
    }
  }

  onPlayerStateChange(event: any) {
    // Update showCloseButton based on player state
    if (event.data === window['YT'].PlayerState.PLAYING) {
      this.showCloseButton = true;
    } else {
      this.showCloseButton = false;
    }
  }

  togglePlayer() {
    // Toggle the visibility of playerContainer and initialize the player if necessary
    console.log(this.showPlayer);
    this.showPlayer = !this.showPlayer;
    console.log(this.showPlayer);
    if (this.showPlayer && !this.player) {
    console.log(this.showPlayer);
    this.showCloseButton = true;
      this.initPlayer();
    }
  }

  playVideo() {
    // Check if player is initialized and play the video
    if (this.player && typeof this.player.playVideo === 'function') {
    console.log(this.showPlayer);
      this.player.playVideo();
    }
  }


  openPreview(car: any) {
    console.log(car);
    
    this.selectedCar = car;
    this.showPreview = true;
  }

  closePreview() {
    console.log('usao');
    
    this.showPreview = false;
  }

  closePlayer() {
    // Check if the player is initialized
    if (this.player && typeof this.player.stopVideo === 'function') {
      // Stop video playback
      this.player.stopVideo();

    }
    console.log(this.showPlayer);
  
    // Hide the player and close button
    this.showPlayer = false;
    console.log(this.showPlayer);
    this.player = false;
    this.playerContainer == undefined
    
    this.showCloseButton = false;
  }

   
  calcWidth(): number {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      console.log('usao u > 767');
      
      this.containerWidth = screenWidth - 683; // Subtract 183px for larger screens
    } else if (screenWidth > 767) {
      console.log('usao u > 767');
      
      this.containerWidth = screenWidth - 283; // Subtract 183px for larger screens
    } else if (screenWidth <= 767) {
      console.log('usao u <= 767');
      this.containerWidth = screenWidth - 66; // Adjust as needed for smaller screens
    }
  
    return this.containerWidth;
  }

  callPhoneNumber() {
    // Implement any logic you need here, such as opening a modal dialog or performing other actions before navigating
    // Then navigate to the desired route
    this.router.navigateByUrl('tel:+38121714709');
  }
  

  // playVideo() {
  //   // Set the video ID when the button is clicked
  //   console.log('usao');
  //   console.log(this.player);
  //   this.player?.playVideo();
    
  //   if (this.player) {
  //     const playerInstance = this.player.getPlayer();
  //     playerInstance.playVideo();
      
  //   }
  // }
}
