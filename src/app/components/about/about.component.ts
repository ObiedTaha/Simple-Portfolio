import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,StarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


}
