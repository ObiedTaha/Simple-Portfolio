import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StarComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title:string='Obaid Ramadan'
  customColorForHome:string='white';
  
}
