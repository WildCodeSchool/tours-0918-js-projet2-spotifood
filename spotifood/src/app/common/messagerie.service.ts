import { Injectable } from '@angular/core';
import { Message } from '../models/messagerie';
import product from './message';
import message from './message';


@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  messages: Message[];


  constructor() {
    if (!localStorage.Messagerie) {
      // Initialisation du local storage
      this.messages = [];
      this.saveToLocalStorage(this.messages);
    } else {
      // Si le tableau Messagerie existe déjà dans le local storage, enregistrer les données correspondantes dans this.messages
      const data = JSON.parse(localStorage.Messagerie);
      this.messages = data;
    }
  }


  saveToLocalStorage(messages) {
    const data = JSON.stringify(messages);
    localStorage.setItem('Messagerie', data);
  }

  get(): Message[] {
    return this.messages;
  }

  add(messagerie: Message) {
    this.messages.push(messagerie);
    this.saveToLocalStorage(this.messages);
  }

  delete(messagerie: Message) {
    const index = this.messages.findIndex(msg => msg.name === messagerie.name);
    this.messages.splice(index, 1);
    this.saveToLocalStorage(this.messages);
  }
}
