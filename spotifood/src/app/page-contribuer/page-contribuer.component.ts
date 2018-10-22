import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product';
import { Nutrients } from '../models/nutriments';
import { GallerieService } from '../common/gallerie.service';
import { LoggingService } from '../common/logging.service';
import message from '../DataMessage/message';
import { MessagerieService } from '../DataMessage/messagerie.service';
import { Message } from '../models/messagerie';


@Component({
	selector: 'app-page-contribuer',
	templateUrl: './page-contribuer.component.html',
	styleUrls: ['./page-contribuer.component.css']
})
export class PageContribuerComponent implements OnInit {

	// produit à créer
	product: Product = new Product();
	products: Product[];
	addForm: boolean;
	closeResult: string;
	adminLogged: boolean;
	message: Message;

	// tslint:disable-next-line:max-line-length
	constructor(private service: MessagerieService, private formService: GallerieService, private route: ActivatedRoute, private modalService: NgbModal) { }

	open(content) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

	ngOnInit() {
		if (this.route.snapshot.paramMap.get('id')) {
			const id = this.route.snapshot.paramMap.get('id');			
			this.addForm = false;
		} else {
			this.addForm = true;
			this.product = new Product();
			this.product.nutrients = new Nutrients();
		}
		this.message = new Message();
		this.products = this.formService.get();
	}

	send() {
		this.service.add(this.message);
		this.message = new Message();
	}

}
