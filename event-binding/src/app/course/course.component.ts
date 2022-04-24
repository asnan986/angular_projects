import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `{{ course.title | uppercase}}<br/> 
            {{course.students}}<br/>
            {{course.rating | number}} <br/>
            {{course.price | currency:'INR'}}
            {{course.releaseDate | date:'shortDate' }}`,
  
})
export class CourseComponent implements OnInit {
  

  course = {
    title: 'Angular training',
    rating: 4.752,
    students: 20,
    price: 20000,
    releaseDate: new Date()
  };
  constructor() { }

  ngOnInit(): void {
  }

}
