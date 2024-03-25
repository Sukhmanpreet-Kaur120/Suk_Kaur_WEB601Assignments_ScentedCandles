import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {

  @Input() content:any;

  constructor() {}
  displayContentInfo() {
    console.log(`Clicked on Content ID: ${this.content.id}, Title: ${this.content.title}`);
  }
  getCardStyles(): { [key: string]: string } {
    switch (this.content.type) {
      case 'Scented Candles':
        return { 'background-color': 'beige', color: 'white' }; 
  
      default:
        return {}; 
    }
}
}

