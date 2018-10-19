import { Component, OnInit } from '@angular/core';
import { MessagerieService } from '../DataMessage/messagerie.service';
import { Message } from '../models/messagerie';

@Component({
  selector: 'app-messagerie-admin',
  templateUrl: './messagerie-admin.component.html',
  styleUrls: ['./messagerie-admin.component.css']
})
export class MessagerieAdminComponent implements OnInit {

  message: Message[];

  constructor(private servce: MessagerieService) { }

  ngOnInit() {
    this.message = this.servce.get();
  }

  delete(messagerie: Message) {
    this.servce.delete(messagerie);
  }

}
