import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-product-list/sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  SalesPersonList: SalesPerson[] = [
    new SalesPerson(' Asnan ' , ' M H ' , ' asnan@gmail.com ' , 50000),
    new SalesPerson(' Azhar ' , ' M H ' , ' azhar@gmail.com ' , 50000),
    new SalesPerson(' Asla ' , ' M H ' , ' asla@gmail.com ' , 50000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
