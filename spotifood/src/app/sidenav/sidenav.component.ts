import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
	filterDisplayed: boolean;


	constructor() { 
	}
	showFilter(){
		this.filterDisplayed = !this.filterDisplayed;
	}
	ngOnInit() {
		this.filterDisplayed = false;
	} 
}


