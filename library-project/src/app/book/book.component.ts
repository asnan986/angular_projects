import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookList:any;

  constructor() {
     this.bookList=[{
        bookid: 123,
        bookname: 'MOF',
        authorname: 'rk banzal',
        price: 2000,
        publishedDate:this._formatdate('08/06/2021'),
      },
      {
        bookid: 124,
        bookname: 'MOS',
        authorname: 'SK Arora',
        price: 2000,
        publishedDate:this._formatdate('07/06/2021'),
      },
      {
        bookid: 125,
        bookname: 'Java',
        authorname: 'Navin Reddy',
        price: 2000,
        publishedDate:this._formatdate('09/06/2021'),
      },
    ];
  }


  _formatdate(date:string){
    return  moment(date,'DD-MM-YYYY').format('DD-MMM-YYYY');
  }

  ngOnInit(): void {
    console.log('hai iam born');
  }

}
