import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-binding';
  buttonDisabled: boolean =true;
  myText: string ="welcome";
  name: string;
  address: string;
}
