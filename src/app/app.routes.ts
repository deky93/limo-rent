import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'/početna'},
    {path:'početna',component:MainComponent},
    {path:'faq', loadComponent: () => import('./faq/faq.component').then(m => m.FaqComponent)},
    {path:'premijum-ponuda', loadComponent: () => import('./special-offer/special-offer.component').then(m => m.SpecialOfferComponent)},
    {path:'o-nama', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
    {path:'kontakt', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)},
    { path: 'limo/:name', loadComponent: () => import('./limo-detail/limo-detail.component').then(m => m.LimoDetailComponent) },

];
