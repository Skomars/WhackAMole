import { Component, OnInit } from '@angular/core';

import { GameLogicService } from './gamelogic.service';
import { Gameboard } from '../models/Gameboard';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor(public _gameLogicService: GameLogicService) {}

  gameMessage: string = 'Game is finished!';
  tile: Tile = { hit: false, moleVisible: false, moleTimer: 0 };

  gameBoard: Gameboard = {
    tiles: [
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
      { hit: false, moleVisible: false, moleTimer: 0 },
    ],
    gameActive: false,
    gameTimer: 0,
    points: 0,
  };

  ngOnInit() {
    // console.log('Gamecomp "ngOnInit" running');

    this._gameLogicService.resetGameBoard();
    this._gameLogicService.gameBoardDataObservable$.subscribe((serviceData) => {
      console.log('The service data:');
      console.log(serviceData);
      this.gameBoard = serviceData;

      // console.log('This gameboard data:');
      // console.log(this.gameBoard);
    });
  }
}
