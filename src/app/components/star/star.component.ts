import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {

  @Input() title:string='';
  @Input() customColor:string='';
}
