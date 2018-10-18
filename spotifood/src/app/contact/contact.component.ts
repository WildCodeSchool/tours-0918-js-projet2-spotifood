import { Component, OnInit } from '@angular/core';
import message from '../DataMessage/message';
import { MessagerieService } from '../DataMessage/messagerie.service';
import { Message } from '../models/messagerie';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: Message;

  constructor(private service: MessagerieService) { }

  ngOnInit() {
    this.message = new Message();
  }

  send() {
    this.service.add(this.message);
  }



}
