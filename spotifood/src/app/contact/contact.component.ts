import { Component, OnInit } from '@angular/core';
import message from '../common/message';
import { MessagerieService } from '../common/messagerie.service';
import { Message } from '../models/messagerie';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: Message;
  sent: boolean;

  constructor(private service: MessagerieService) { }

  ngOnInit() {
    this.message = new Message();
    this.sent = false;
  }

  // save the message to the localStorage
  send() {
    this.service.add(this.message);
    this.message = new Message();
    this.sent = true;
  }



}
