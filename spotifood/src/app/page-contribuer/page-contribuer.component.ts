import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Nutrients } from '../models/nutriments';
import { ProductService } from '../common/product.service';
import message from '../common/message';
import product from '../common/message';
import { MessagerieService } from '../common/messagerie.service';
import { Message } from '../models/messagerie';
import { Product } from '../models/product';


@Component({
	selector: 'app-page-contribuer',
	templateUrl: './page-contribuer.component.html',
	styleUrls: ['./page-contribuer.component.css']
})
export class PageContribuerComponent implements OnInit {


	addForm: boolean;
	closeResult: string;
  message: Message;
  products: Product[];


	// tslint:disable-next-line:max-line-length
	constructor(private service: MessagerieService, private formService: ProductService, private route: ActivatedRoute, private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed`;
		});
	}

	ngOnInit() {
    this.message = new Message();
    this.products = this.formService.get();
	}

	send() {
		this.service.add(this.message);
		this.message = new Message();
	}
}
