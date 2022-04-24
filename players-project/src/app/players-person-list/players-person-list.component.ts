import { Component, OnInit } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-players-person-list',
  templateUrl: './players-person-list.component.html',
  styleUrls: ['./players-person-list.component.css']
})
export class PlayersPersonListComponent implements OnInit {

  playersList: Player[] = [
    new Player('Sandesh Jingon' , 'Kerala Blasters' , 'defender'),
    new Player('James Hosu' , 'Kerala Blasters' , 'Right back'),
    new Player('Iyan hume' , 'Athletico de kolkata' , 'Center forward'),
    new Player('Mendoza' , 'Chennayin F.C' , 'Right Wing Forward')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
