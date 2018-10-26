import { Component, OnInit } from '@angular/core';
import { MessagerieService } from '../DataMessage/messagerie.service';
import { Message } from '../models/messagerie';
import product from '../DataMessage/message';
import { Nutrients } from '../models/nutriments';
import message from '../DataMessage/message';

@Component({
  selector: 'app-messagerie-admin',
  templateUrl: './messagerie-admin.component.html',
  styleUrls: ['./messagerie-admin.component.css']
})

export class MessagerieAdminComponent implements OnInit {

  message: Message[];
  nutrients: Nutrients;


  constructor(private service: MessagerieService) { }

  ngOnInit() {
    this.message = this.service.get();
    this.nutrients = new Nutrients();
  }

  delete(messagerie: Message) {
    this.service.delete(messagerie);
  }
}