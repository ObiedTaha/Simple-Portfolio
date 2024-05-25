import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

@ViewChild('nav')
nav!:ElementRef


  @HostListener('window:scroll')
  animation():void{
    window.scrollY>30?this.nav.nativeElement.classList.remove('py-3'):this.nav.nativeElement.classList.add('py-3');
  }
}
