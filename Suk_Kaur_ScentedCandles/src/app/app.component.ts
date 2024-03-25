import { Component } from '@angular/core';
import { ScentedCandlesService } from './services/scented-candles.service';
import { CONTENT } from './helper-files/ContentDb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // 
  title = 'Suk_Kaur_ScentedCandles';
  singleContentItem: any;
  selectedId: number | undefined;
  errorMessage: string | undefined;

  constructor(private scentedCandlesService:ScentedCandlesService) {}

  ngOnInit(): void {
    this.loadSingleContent(1);
  }

  loadSingleContent(id: number): void {
    this.scentedCandlesService.getSingleContentItem(id).subscribe(
      item => {
        this.singleContentItem = item;
      },
      error => {
        console.error('Error occurred while loading single content:', error);
      }
    );
  }

  getContentItem(): void {
    if (this.selectedId === undefined || !Number.isInteger(this.selectedId) || this.selectedId <= 0 || this.selectedId > CONTENT.length) {
      this.errorMessage = 'Invalid id entered.';
    } else {
      this.errorMessage = '';
      this.loadSingleContent(this.selectedId);
    }
  }
}
