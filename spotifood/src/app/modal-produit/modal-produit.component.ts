import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-modal-produit',
  templateUrl: './modal-produit.component.html',
  styleUrls: ['./modal-produit.component.css']
})
export class ModalProduitComponent implements OnInit {

  @Input()
 productModal: any;

 @Input()
 modalInput: any;

 constructor(public loggingService: LoggingService) {
   }

  ngOnInit() {
    this.loggingService.getLogStatus();
  }
}
