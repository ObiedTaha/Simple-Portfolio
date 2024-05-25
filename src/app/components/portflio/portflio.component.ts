import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portflio',
  standalone: true,
  imports: [CommonModule, StarComponent],
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.scss']
})
export class PortflioComponent {
  srcs: string[] = [
    'assets/images/port2.png',
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/poert1.png',
    'assets/images/port3.png',
  ];

  flag: boolean = true;
  modelItem: string = '';

  hideModel(element: EventTarget | null, image: HTMLImageElement): void {
    if (element == image) return;
    this.flag = true;
  }

}
