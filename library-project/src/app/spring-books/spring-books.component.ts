import { Component, OnInit } from '@angular/core';
import { SpringbookService} from '../springbook.service'

@Component({
  selector: 'app-spring-books',
  templateUrl: './spring-books.component.html',
  styleUrls: ['./spring-books.component.css']
})
export class SpringBooksComponent implements OnInit {

  title: any ='Library books';
  springbooks:any;
  constructor(private service:SpringbookService) { }

  ngOnInit(): void {
    this.springbooks =this.service.getSpringBooks().subscribe((data)=>this.springbooks=data);
  }

}
