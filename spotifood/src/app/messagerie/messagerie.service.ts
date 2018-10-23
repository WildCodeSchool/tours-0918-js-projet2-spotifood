import { Injectable } from '@angular/core';
import message from './message';
import { Message } from '../models/messagerie';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  messages: Message[];

  constructor() {
    if (!localStorage.Messagerie) {
      // Initialisation du local storage et du tableau Message.
      this.messages = message.map((x) => {

        const send = new Message();

        send.name = x['name'];
        send.objet = x['objet'];
        send.email = x['email'];
        send.message = x['message'];

        return send;
      });
      this.saveToLocalStorage(this.messages);

    } else {
      // Si le tableau Message existe déjà dans le local storage, enregistrer les données correspondantes dans this.messages
      const data = JSON.parse(localStorage.Messagerie);
      this.messages = data;
    }
   }

   // Sauvegarde dans le localStorage.
  saveToLocalStorage(messages) {
    const data = JSON.stringify(messages);
    localStorage.setItem('Messagerie', data);
  }

  // Retourne les messages.
  get(): Message[] {
    return this.messages;
  }

  // Methode pour ajouter le formulaire dans le localStorage.
  add(messagerie: Message) {
    this.messages.push(messagerie);
    this.saveToLocalStorage(this.messages);
  }

  // Methode pour supprimer un index dans le localStorage.
  delete(messagerie: Message) {
    const index = this.messages.findIndex(message => message.name === messagerie.name);
    this.messages.splice(index, 1);
    this.saveToLocalStorage(this.messages);
  }
}
