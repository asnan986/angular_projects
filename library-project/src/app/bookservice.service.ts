import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() {
    return [
      {
        bookid: 123,
        bookname: 'MOF',
        authorname: 'rk banzal',
        price: 2000,
        year: 1990
      },
      {
        bookid: 124,
        bookname: 'MOS',
        authorname: 'SK Arora',
        price: 2000,
        year: 1990
      },
      {
        bookid: 125,
        bookname: 'Java',
        authorname: 'Navin Reddy',
        price: 2000,
        yeae: 1990
      },
    ];
  }
}
