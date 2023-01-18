import { Component, OnInit } from '@angular/core';
import { GameLogicService } from '../game/gamelogic.service';
import { Gameboard } from '../models/Gameboard';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public _gameLogicService: GameLogicService) {}

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
    totalGametime: 0,
    points: 0,
  };

  ngOnInit() {
    this._gameLogicService.resetGameBoard();
    this._gameLogicService.gameBoardDataObservable$.subscribe((serviceData) => {
      this.gameBoard = serviceData;
    });
  }
}
