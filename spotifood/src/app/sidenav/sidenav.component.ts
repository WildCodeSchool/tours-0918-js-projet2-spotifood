import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
	bool: boolean;


	constructor() { 
	}
	showFilter(){
		this.bool = !this.bool;
	}
	ngOnInit() {
		this.bool = false;
	} 
}


