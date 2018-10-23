import { Component, OnInit } from '@angular/core';
import { MessagerieService } from '../DataMessage/messagerie.service';
import { Message } from '../models/messagerie';
import { Product } from '../models/productsuggest'



@Component({
  selector: 'app-messagerie-admin',
  templateUrl: './messagerie-admin.component.html',
  styleUrls: ['./messagerie-admin.component.css']
})
export class MessagerieAdminComponent implements OnInit {

  message: Message[];
  product: Product[];

  constructor(private service: MessagerieService) { }

  ngOnInit() {
    this.message = this.service.get();
  }

  delete(messagerie: Message) {
    this.service.delete(messagerie);
  }
}