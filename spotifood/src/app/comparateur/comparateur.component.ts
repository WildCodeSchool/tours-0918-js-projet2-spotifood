import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit {
  page = 4;


  constructor() { }

  ngOnInit() {
  }
}

const style = document.getElementById('Comparateur');

style.className = 'test';
