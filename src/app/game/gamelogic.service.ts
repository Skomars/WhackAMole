import { Injectable } from '@angular/core';
import { Subject, interval, take } from 'rxjs';
import { Tile } from '../models/Tile';
import { Gameboard } from '../models/Gameboard';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  constructor() {}

  // Models
  moleTimer: number = 0;
  tile: Tile = { hit: false, moleVisible: false, moleTimer: 0 };
  gameboardData: Gameboard = {
    tiles: [
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
      { hit: false, moleVisible: false, moleTimer: this.moleTimer },
    ],
    gameActive: true,
    gameTimer: 0,
    points: 0,
  };
  // tempBoardTiles: Tile = { hit: false, moleVisible: false, moleTimer: 0 };

  // Behövs denna?
  tileNumber: number = 0;

  // Mole properties
  maxMoleDisplayTime: number = 4000;
  maximumVisibleMoles: number = 3;
  delayUntilDisplayMole: number = 0;
  selectedTile: number = 0;
  currentMolesOnBoard: number = 0;

  // Flag indicating if a gamesession is active or not.
  gameActive: boolean = false;

  // Variables handlig the timer and initial points value
  points: number = 0;
  numbers = interval(1000);
  gametime: number = 25;
  currentCountervalue: number = this.gametime;
  timeSettingCounter: number = this.gametime;
  countdownEngine = this.numbers.pipe(take(this.timeSettingCounter));

  // Observable/Subject
  private _gameBoardData = new Subject<Gameboard>();
  gameBoardDataObservable$ = this._gameBoardData.asObservable();

  // Start a gamesession. Fires main timer
  startWhacking(): void {
    this.currentMolesOnBoard = 0;
    this.resetGameBoard();
    this._gameBoardData.next(this.gameboardData);
    this.gameActive = true;
    this.gameboardData.gameActive = this.gameActive;
    this.gameboardData.points = 0;
    this.points = 0;
    this.moleRandomizer();

    console.log('Game Start');
    this.currentCountervalue = this.gametime;

    this.countdownEngine.subscribe((val) => {
      // If time is left..
      if (val < this.timeSettingCounter) {
        this.currentCountervalue--;

        this.gameboardData.gameTimer = this.currentCountervalue;
        // console.log(this.currentCountervalue);
      }
      // If time is up..
      if (this.currentCountervalue === 0) {
        this.gameActive = false;
        this.gameboardData.gameActive = this.gameActive;
        console.log('Game END');
      }
    });
  }

  // Fires when a tile is clicked
  whackTile(clickedTile: number): void {
    this.checkMole(clickedTile);
    console.log(clickedTile + ' has been clicked!');
    this.tileNumber = clickedTile;
  }

  // Check if there is a hit or not
  checkMole(clickedTile: number): void {
    console.log(this.gameboardData.tiles[clickedTile].hit);

    if (this.gameboardData.gameActive) {
      if (this.gameboardData.tiles[clickedTile].moleVisible) {
        this.gameboardData.tiles[clickedTile].hit = true;
        this.gameboardData.points = this.gameboardData.points + 1;
        console.log(' 🟢 Mole hit: _TRUE_');

        this.resetMoleHit(clickedTile);
        this.generateRandomMole();
      } else {
        console.error('Mole hit: _FALSE_');
      }
    } else {
      console.error('Game is not active!');
    }
  }

  // Resetting one Mole/tile
  resetMoleHit(resetMole: number): void {
    this.gameboardData.tiles[resetMole].moleVisible = false;
    this.gameboardData.tiles[resetMole].hit = false;
  }

  // If mole is hit or if the timer for the mole is zero, hide mole
  hideMole() {}

  // Main function for generating moles
  generateRandomMole() {
    this.selectedTile = Math.floor(Math.random() * 24);

    while (this.gameboardData.tiles[this.selectedTile].moleVisible) {
      this.selectedTile = Math.floor(Math.random() * 24);
    }

    this.showMole(this.selectedTile);
  }

  // Called when generating a mole on gameboard
  showMole(mole: number) {
    this.gameboardData.tiles[mole].moleVisible = true;
  }

  resetGameBoard() {
    this.gameboardData.tiles.forEach((el) => {
      el.hit = false;
      el.moleVisible = false;
    });
  }

  moleRandomizer() {
    // Simulating generated moles
    setTimeout(() => {
      this.gameboardData.tiles[0].moleVisible = true;
      this.gameboardData.tiles[2].moleVisible = true;
      this.gameboardData.tiles[4].moleVisible = true;
    }, 1);
  }

  // Randomizer for a Mole display time on gameboard
  setMoleDisplayTime() {}
}
