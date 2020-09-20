import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-components-game-outlet',
  templateUrl: './game-outlet.component.html',
  styleUrls: ['./game-outlet.component.css']
})
export class GameOutletComponent implements OnInit {
  @Input('game-name') gameName: string;
  @Input('game-icon') gameIcon: string;
  @Input('game-id') gameId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
