import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  adminLogged: boolean;
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.adminLogged = sessionStorage.adminLogged ? true : false;
  }

}
