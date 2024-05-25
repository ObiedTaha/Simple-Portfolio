import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent), title: 'Home' },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent), title: 'About' },
  { path: 'portfolio', loadComponent: () => import('./components/portflio/portflio.component').then((m) => m.PortflioComponent), title: 'Portfolio' },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then((m) => m.ContactComponent), title: 'Contact' },
  { path: '**', loadComponent: () => import('./components/notfound/notfound.component').then((m) => m.NotfoundComponent), title: 'Not found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
