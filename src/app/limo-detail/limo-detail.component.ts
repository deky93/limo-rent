import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LimosService } from '../limos.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-limo-detail',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './limo-detail.component.html',
  styleUrl: './limo-detail.component.css'
})
export class LimoDetailComponent implements OnInit,AfterViewInit {
  selectedCar: any;

  constructor(private route: ActivatedRoute, private limoService: LimosService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      const carName = params.get('name');
      console.log(carName);
      
      if (carName != undefined) {
      //const formattedName = this.limoService.replaceSpacesWithHyphens(carName);
      this.selectedCar = this.limoService.getCarByName(carName);
      console.log(this.selectedCar);
      
      }
    });
  }

  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      // Reset scroll position
        window.scrollTo(0, 0); 
      
    }
  }


}
