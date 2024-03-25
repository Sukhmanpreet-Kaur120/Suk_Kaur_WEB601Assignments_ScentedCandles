import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/ContentDb';
import { MessagesService } from '../messages.service';


@Injectable({
  providedIn: 'root'
})
export class ScentedCandlesService {

  constructor(private appMessagesService: MessagesService) { }
  getContentObs():Observable<Content[]>{
    return of(CONTENT);
  }
  getContentById(id:number):Observable<any>{
    return of(CONTENT.find(item => item.id === id));
  }
  getSingleContentItem(id: number): Observable<any> {
    const item = CONTENT.find(content => content.id === id);
    this.appMessagesService.addMessage(`Content Item at id: ${id}`);
    return of(item);
    }
}
