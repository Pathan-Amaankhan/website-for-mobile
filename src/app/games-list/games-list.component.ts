import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BoardComponent} from './game-core-2048/board/board.component';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  gameComponent;
  gameStarted = false;
  constructor() { }

  ngOnInit(): void {
  }
  startGame(gameName) {
    // if (gameName === '2048') {
    //   this.gameStarted = true;
    //   this.gameComponent = BoardComponent;
    // }
    switch (gameName.target.parentNode.id) {
      case '2048':
        this.gameStarted = true;
        this.gameComponent = BoardComponent;
        break;
      default:
        console.log('NO Game');
    }
  }

}
