import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  addMessages(msg: string): void{
this.messages.push(msg);
  }

  clearMsg(): void{
    this.messages = [];
  }
}
