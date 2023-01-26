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
  // Dependency injection of the service
  constructor(public _gameLogicService: GameLogicService) {}

  tile: Tile = {
    hit: false,
    moleVisible: false,
    moleTimer: 0,
    moleSubscription: null,
    clickTimerSub: null,
  };

  gameBoard: Gameboard = {
    tiles: [
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
      },
    ],
    gameActive: false,
    gameTimer: 0,

    points: 0,
    fastestClick: null,
  };

  ngOnInit() {
    // On init, subscribe to the observable in the service component
    // Reason for sunscribing in the navbar, is to get the gameActive flag in order to disable links while game is active
    this._gameLogicService.gameBoardDataObservable$.subscribe((serviceData) => {
      this.gameBoard = serviceData;
    });
  }
}
