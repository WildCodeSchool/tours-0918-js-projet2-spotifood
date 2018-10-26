import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Nutrients } from '../models/nutriments';
import { GallerieService } from '../common/gallerie.service';
import message from '../DataMessage/message';
import product from '../DataMessage/message';
import { MessagerieService } from '../DataMessage/messagerie.service';
import { Message } from '../models/messagerie';


@Component({
	selector: 'app-page-contribuer',
	templateUrl: './page-contribuer.component.html',
	styleUrls: ['./page-contribuer.component.css']
})
export class PageContribuerComponent implements OnInit {


	addForm: boolean;
	closeResult: string;
	message: Message;


	constructor(private service: MessagerieService, private formService: GallerieService, private route: ActivatedRoute, private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed`;
		});
	}

	ngOnInit() {		
		this.message = new Message();	

	}

	send() {
		this.service.add(this.message);
		this.message = new Message();
	}
}