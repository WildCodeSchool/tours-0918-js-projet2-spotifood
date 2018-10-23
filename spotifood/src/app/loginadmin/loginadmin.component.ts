import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  champ: string;
  champOk: string;
  closeResult: string;

  constructor(private modalService: NgbModal, private router: Router, private loggingService: LoggingService) { }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.champ = '';
    this.champOk = 'uneadressemail@gmail.com';
  }
  // Method for verification input on the login page.
  verify(content) {
    if (this.champ !== this.champOk) {
      this.modalService.open(content).result
      .then(result => {
        this.closeResult = `Closed with: ${result}`;
      })
      .catch(reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      console.log(false);
    } else {
      this.router.navigate(['admin/produits']);
      console.log(true);
      this.loggingService.logAdmin();
    }

  }
}
