import { Injectable } from '@angular/core';
import { Subject, interval, take } from 'rxjs';
import { Tile } from '../models/Tile';
import { Gameboard } from '../models/Gameboard';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  constructor() {}

  /** Types - Start */
  tile: Tile = { hit: false, moleVisible: false };
  gameData: Gameboard = {
    tiles: [
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
      { hit: false, moleVisible: false },
    ],
    gameActive: false,
    gameTimer: 0,
    points: 0,
  };
}

