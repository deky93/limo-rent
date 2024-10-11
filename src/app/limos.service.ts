import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Limo {
  name: string;
  year: number;
  transmision: string;
  miles: string;
  photoUrl: string;
  alt:string;
  peopleNum:string;
}

@Injectable({
  providedIn: 'root'
})

export class LimosService {
  private selectedCarSubject = new BehaviorSubject<any>(null);
  selectedCar$ = this.selectedCarSubject.asObservable();

limos: Limo[] = [
  {
    name:"LINCOLN TOWN CAR CELEBRITY",
    year:2015,
    transmision:"AUTO",
    miles:"25K",
    peopleNum:"Maksimalno 8 osoba",
    photoUrl:"assets/img/limuzinainfo1.png",
    alt:"Slika 1"
  },
  {
    name:"LINCOLN STRETCH CRYSTAL",
    year:2016,
    transmision:"AUTO",
    miles:"26K",
    peopleNum:"Maksimalno 6 osoba",
    photoUrl:"assets/img/black__limo_resized.png",
    alt:"Slika 2"

  },
  {
    name:"lINCOLN TOWN CAR CELEBRITY",
    year:2017,
    transmision:"AUTO",
    miles:"27K",
    peopleNum:"Maksimalno 8 osoba",
    photoUrl:"assets/img/limuzinainfo3.png",
    alt:"Slika 3"

  }

];

  constructor() { }

  setSelectedCar(car: any) {
    this.selectedCarSubject.next(car);
  }

  getCarByName(name: string) {
    console.log(name);
    
    return this.limos.find(limo => this.replaceSpacesWithHyphens(limo.name)  === name);
  }

  getLimos() {
    return this.limos.map(car => ({
      ...car,
      name: car.name.trim().replace(/\s+/g, '-')
    }));
  }

  replaceSpacesWithHyphens(name: string):string {
    console.log(name);
    
    if (typeof window !== "undefined") {
      return name.trim().replace(/\s+/g, '-');
      
    }

    return name.trim().replace(/\s+/g, '-');
    
  }

  
}
