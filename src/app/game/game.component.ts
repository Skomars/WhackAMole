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
  constructor(public _gameLogicService: GameLogicService) {
    this.gameBoard.gameTimer = this._gameLogicService.gametime;
  }

  gameMessage: string = 'Game is finished!';
  tile: Tile = {
    hit: false,
    moleVisible: false,
    moleTimer: 0,
    moleSubscription: null,
  };

  gameBoard: Gameboard = {
    tiles: [
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
      { hit: false, moleVisible: false, moleTimer: 0, moleSubscription: null },
    ],
    gameActive: false,
    gameTimer: 0,
    totalGametime: 0,
    points: 0,
  };

  ngOnInit() {
    this._gameLogicService.resetGameBoard();
    this._gameLogicService.gameBoardDataObservable$.subscribe((serviceData) => {
      this.gameBoard = serviceData;
      this.gameBoard.gameTimer = this._gameLogicService.gametime;
    });
  }
}
