import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-appmessages',
  templateUrl: './appmessages.component.html',
  styleUrl: './appmessages.component.scss'
})
export class AppmessagesComponent {
  messages: string[] = [];

  constructor(private appMessagesService: MessagesService) { }

  ngOnInit(): void {
    this.appMessagesService.message$.subscribe(message => {
      this.messages.push(message);
      console.log(message);
    });
  }
}
