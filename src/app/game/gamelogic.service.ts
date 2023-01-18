import { ComponentFactoryResolver, Injectable } from '@angular/core';
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
    totalGametime: 0,
  };
  // tempBoardTiles: Tile = { hit: false, moleVisible: false, moleTimer: 0 };

  // Behövs denna?
  tileNumber: number = 0;

  // Mole properties
  maxMoleDisplayTime: number = 4;
  maximumVisibleMoles: number = 3;
  minimumVisibleMoles: number = 1;
  maxDelayUntilDisplayMole: number = 3;
  minDelayUntilDisplayMole: number = 0.5;
  selectedTile: number = 0;
  currentMolesOnBoard: number = 0;

  // Flag indicating if a gamesession is active or not.
  gameActive: boolean = false;
  points: number = 0;

  // Timing
  numberOfMoles: Tile[] = [];
  numbers = interval(1000);
  moletime = interval(1000);
  gametime: number = 60;
  currentCountervalue: number = this.gametime;
  timeSettingCounter: number = this.gametime;
  countdownEngine = this.numbers.pipe(take(this.timeSettingCounter));
  moleCountdownTimer = this.moletime.pipe(take(this.maxMoleDisplayTime));

  // Observable/Subject
  private _gameBoardData = new Subject<Gameboard>();
  gameBoardDataObservable$ = this._gameBoardData.asObservable();

  // Start a gamesession. Fires main timer
  startWhacking(): void {
    console.log('Game Start');
    this.currentCountervalue = this.gametime;
    this.resetGameBoard();
    this.currentMolesOnBoard = 0;
    this._gameBoardData.next(this.gameboardData);
    this.gameActive = true;
    this.gameboardData.gameActive = this.gameActive;
    this.gameboardData.points = 0;
    this.points = 0;

    this.moleRandomizer();
    this.moleRandomizer();
    this.moleRandomizer();

    this.countdownEngine.subscribe((val) => {
      // If time is left..
      if (val < this.timeSettingCounter) {
        this.currentCountervalue--;

        this.gameboardData.gameTimer = this.currentCountervalue;
      }
      // If time is up..
      if (this.currentCountervalue === 0) {
        console.log('Game END');
        this.gameActive = false;
        this.gameboardData.gameActive = this.gameActive;
        this.resetGameBoard();
        this.gameboardData.gameTimer = this.gametime;
      }
    });
  }

  // Click - Function fires when a tile is clicked
  whackTile(clickedTile: number): void {
    this.checkMole(clickedTile);
    console.log(clickedTile + ' has been clicked!');
    this.tileNumber = clickedTile;
  }

  // Check if there is a hit or not
  checkMole(clickedTile: number): void {
    console.log(this.gameboardData.tiles[clickedTile].moleVisible);
    console.log(this.getVisibleMoles());

    if (this.gameboardData.gameActive) {
      if (this.gameboardData.tiles[clickedTile].moleVisible) {
        this.gameboardData.tiles[clickedTile].hit = true;
        this.gameboardData.points = this.gameboardData.points + 1;
        console.log(' 🟢 Mole hit: _TRUE_');

        this.resetMole(clickedTile);
      } else {
        console.error(' 🔴  Mole hit: _FALSE_');
      }
    } else {
      console.error('Game is not active!');
    }
  }

  // Resetting one Mole/tile. Called if time runs out or the mole is hit
  resetMole(resetMole: number): void {
    this.gameboardData.tiles[resetMole].moleVisible = false;
    this.gameboardData.tiles[resetMole].hit = false;
    this.currentMolesOnBoard--;

    this.getVisibleMoles();
    if (this.currentMolesOnBoard < this.maximumVisibleMoles) {
      this.moleRandomizer();
    }
  }

  // Main function for generating moles
  generateRandomMole() {
    this.getVisibleMoles();
    if (this.currentMolesOnBoard < this.maximumVisibleMoles) {
      if (this.gameboardData.gameActive) {
        this.selectedTile = Math.floor(Math.random() * 24);

        while (this.gameboardData.tiles[this.selectedTile].moleVisible) {
          this.selectedTile = Math.floor(Math.random() * 24);
        }
        this.showMole(this.selectedTile);
      }
    }
  }

  // Called when generating a mole on gameboard
  showMole(mole: number) {
    this.gameboardData.tiles[mole].moleVisible = true;
    this.currentMolesOnBoard++;

    this.moleCountdownTimer.subscribe((val) => {
      console.log('val:' + val);
      val++;

      if (val === 4) {
        console.log(
          'Mole wasn´t clicked, set moleVisible property back to false again '
        );
        console.warn('Moles visible: ' + this.getVisibleMoles());
        this.gameboardData.tiles[mole].moleTimer = 0;
        this.resetMole(mole);
        val = 0;
      }
    });
  }

  resetGameBoard() {
    this.gameboardData.tiles.forEach((el) => {
      el.hit = false;
      el.moleVisible = false;
    });
  }

  // Simulating generated starting moles
  moleRandomizer() {
    this.getVisibleMoles();
    if (this.currentMolesOnBoard < this.maximumVisibleMoles) {
      setTimeout(() => {
        this.generateRandomMole();
      }, this.generateMoleDelayDisplayTime()); // Delayrandomizer if there is time
    }
  }

  // Delay until the next mole is generated
  generateMoleDelayDisplayTime(): number {
    this.getVisibleMoles();
    console.log(
      'Mole delay timer value: ' +
        Math.random() *
          (this.maxDelayUntilDisplayMole - this.minDelayUntilDisplayMole) +
        this.minDelayUntilDisplayMole
    );
    return (
      (Math.random() *
        (this.maxDelayUntilDisplayMole - this.minDelayUntilDisplayMole) +
        this.minDelayUntilDisplayMole) *
      1000
    );
  }

  getVisibleMoles(): number {
    this.currentMolesOnBoard = 0;
    this.gameboardData.tiles.forEach((el) => {
      if (el.moleVisible) {
        this.currentMolesOnBoard++;
      }
    });
    return this.currentMolesOnBoard;
  }
}
