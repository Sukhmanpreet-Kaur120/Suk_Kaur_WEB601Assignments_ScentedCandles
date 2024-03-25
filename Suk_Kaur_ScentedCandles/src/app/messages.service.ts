import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  constructor() { }

  addMessage(message: string) {
    this.messageSource.next(message);
  }

  // Function to handle error
  private handleError(error: any): Observable<any> {
    console.error('An error occurred in MessagesService:', error); // You can also log the error to a logging service
    throw error; // You can modify this to return a user-friendly error message if needed
  }

  // Function to unsubscribe from the observable
  // subscribe(): void {
  //   this.messageSource.complete();
  // }
}