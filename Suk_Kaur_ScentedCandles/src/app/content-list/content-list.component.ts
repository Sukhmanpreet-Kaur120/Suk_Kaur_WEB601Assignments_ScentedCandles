// content-list.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { style } from '@angular/animations';
import { ScentedCandlesService } from '../services/scented-candles.service';
import { CONTENT } from '../helper-files/ContentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  contentList:Content[]= CONTENT;
  List:Content[]= CONTENT;
   
  // searchTitle: string = ''; 
  // searchResultMessage: string = ''; 
  // searchResultColor: string = ''; 
  // searchContent() {
  //   let contentExists = this.contentList.some(content => content.title.toLowerCase() === this.searchTitle.toLowerCase());

  //   if (contentExists) {
  //     this.searchResultMessage = 'Content item exists!';
  //     this.searchResultColor = 'green';
  //     let selectedContent = this.contentList.find(content => content.title === this.searchTitle);
  //     if (selectedContent) {
  //       selectedContent.isSelected = true;
  //     }
  //   } else {
  //     this.searchResultMessage = 'Content item does not exist!';
  //     this.searchResultColor = 'red';
  //   }
  // }

  constructor(private scentedCandlesService: ScentedCandlesService) {
  }
  ngOnInit() {
    this.scentedCandlesService.getContentObs().subscribe(content => this.contentList = content)
    // this.ScentedCandles.getContentById(3).subscribe(content=> this.List = content);
  }
}
