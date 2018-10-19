import { Injectable } from '@angular/core';
import message from './message';
import { Message } from '../models/messagerie';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  message: Message[];

  constructor() {
    if (!localStorage.Messagerie) {
      // Initialisation du local storage et du tableau products avec tableau des produits
      this.message = message.map((x) => {

        const send = new Message();

        send.name = x['name'];
        send.objet = x['objet'];
        send.email = x['email'];
        send.message = x['message'];

        return send;
      });
      this.saveToLocalStorage(this.message);

    } else {
      // Si le tableau Products existe déjà dans le local storage, enregistrer les données correspondantes dans this.products
      const data = JSON.parse(localStorage.Messagerie);
      this.message = data;
    }
   }


  saveToLocalStorage(messages) {
    const data = JSON.stringify(messages);
    localStorage.setItem('Messagerie', data);
  }

  get(): Message[] {
    return this.message;
  }

  add(messagerie: Message) {
    this.message.push(messagerie);
    this.saveToLocalStorage(this.message);
  }
}
