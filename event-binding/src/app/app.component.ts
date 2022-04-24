import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding';
  name='asnan';
  updateName(): void{
    this.name='asnu'
  }
}
