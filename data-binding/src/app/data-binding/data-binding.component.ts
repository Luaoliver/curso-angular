import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage = 'https://www.johndpotts.com/static/f4efd0b5a6e6474b9241df79a65bcca1/77eb6/data-binding-chart.jpg'

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}