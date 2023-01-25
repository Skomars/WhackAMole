import { Injectable } from '@angular/core';
import { Subject, interval, take } from 'rxjs';
import { Tile } from '../models/Tile';
import { Gameboard } from '../models/Gameboard';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  constructor() {}

  //* Models
  tile: Tile = {
    hit: false,
    moleVisible: false,
    moleTimer: 0,
    moleSubscription: null,
    clickTimerSub: null,
    clickTimerVal: 4000,
  };
  gameboardData: Gameboard = {
    tiles: [
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
      {
        hit: false,
        moleVisible: false,
        moleTimer: 0,
        moleSubscription: null,
        clickTimerSub: null,
        clickTimerVal: 4000,
      },
    ],
    gameActive: false,
    gameTimer: 0,
    totalGametime: 0,
    points: 0,
    fastestClick: null,
  };

  //* Moles - Amount of moles
  currentMolesOnBoard: number = 0;
  maximumVisibleMoles: number = 3;
  minimumVisibleMoles: number = 1;

  //* Moles - Timing of moles
  maxMoleDisplayTime: number = 4;
  maxDelayUntilDisplayMole: number = 4000;
  minDelayUntilDisplayMole: number = 1000;

  //* Timer-related properties
  gametime: number = 30; //* Gametime setting
  int = interval(1000);
  currentCountervalue: number = this.gametime; //* Timer starts at gametime value and counts down to '0'
  gameCountdownTimer = this.int.pipe(take(this.gametime)); //* Gametime observable
  moleCountdownTimer = this.int.pipe(take(this.maxMoleDisplayTime)); //* Moletimer observable

  //* Fastest click
  clickTimer!: any;

  //* Observable (-> game.component.ts)
  private _gameBoardData = new Subject<Gameboard>();
  gameBoardDataObservable$ = this._gameBoardData.asObservable();

  //* Start a gamesession.
  startWhacking(): void {
    this.gameboardData.fastestClick = null;
    console.log('Game Start');
    //* Ticking clock
    let clock = new Audio();
    clock.src = '../../assets/clock.wav';
    clock.load();
    clock.volume = 0.1;
    clock.loop = true;
    clock.play();

    //* Gameplaymusic
    let gameplayMusic = new Audio();
    gameplayMusic.src = '../../assets/gameplaymusic.mp3';
    gameplayMusic.load();
    gameplayMusic.volume = 0.3;
    gameplayMusic.loop = true;
    gameplayMusic.play();

    this.currentCountervalue = this.gametime;
    this.resetGameBoard();
    this.currentMolesOnBoard = 0;
    this._gameBoardData.next(this.gameboardData);

    this.gameboardData.gameActive = true;
    this.gameboardData.points = 0;

    //* Generate starting moles
    this.moleRandomizer();
    this.moleRandomizer();
    this.moleRandomizer();

    //* Main timer
    this.gameCountdownTimer.subscribe((val) => {
      //* If time is left..
      if (val < this.gametime) {
        this.currentCountervalue--;
        this.gameboardData.gameTimer = this.currentCountervalue;
      }
      //* If time is up..
      if (this.currentCountervalue === 0) {
        console.log('Game END');

        this.gameboardData.gameActive = false;
        this.resetGameBoard();
        this.gameboardData.gameTimer = this.gametime;

        this.gameboardData.tiles.forEach((mole) => {
          mole.moleTimer = 0;
          mole.moleVisible = false;
          clock.pause();
          gameplayMusic.pause();
        });
      }
    });
  }

  //* Click - Function fires when a tile is clicked
  whackTile(clickedTile: number): void {
    this.gameboardData.tiles[clickedTile].moleTimer = 0;
    this.checkMole(clickedTile);
    console.log(clickedTile + ' has been clicked!');
  }

  //* Check if there is a hit or not
  checkMole(clickedTile: number): void {
    console.log('visible moles: ' + this.getVisibleMoles());

    if (this.gameboardData.gameActive) {
      if (this.gameboardData.tiles[clickedTile].moleVisible) {
        this.gameboardData.tiles[clickedTile].moleSubscription.unsubscribe();
        this.gameboardData.tiles[clickedTile].moleSubscription = null;

        this.clickTimer =
          new Date().getTime() -
          this.gameboardData.tiles[clickedTile].clickTimerSub;

        if (
          this.gameboardData.fastestClick > this.clickTimer ||
          this.gameboardData.fastestClick === null
        ) {
          this.gameboardData.fastestClick = this.clickTimer;
        }

        this.clickTimer = null;

        let molehit = new Audio();
        molehit.src = '../../assets/molehit.wav';
        molehit.load();
        molehit.volume = 0.1;
        molehit.play();

        this.gameboardData.tiles[clickedTile].hit = true;
        this.gameboardData.points = this.gameboardData.points + 1;

        console.log(' 🟢 Mole hit: _TRUE_');

        this.resetMole(clickedTile);
      } else {
        console.log(this.gameboardData.gameActive);

        let molemiss = new Audio();
        molemiss.src = '../../assets/molemiss.wav';
        molemiss.load();
        molemiss.volume = 0.1;
        molemiss.play();

        console.error(' 🔴  Mole hit: _FALSE_');
      }
    } else {
      console.error('Game is not active!');
    }
  }

  //* Resetting one mole. Called if time runs out or the mole is hit
  resetMole(resetMole: number): void {
    this.gameboardData.tiles[resetMole].moleVisible = false;
    this.gameboardData.tiles[resetMole].hit = false;
    this.currentMolesOnBoard--;

    this.getVisibleMoles();
    if (this.currentMolesOnBoard < this.maximumVisibleMoles) {
      this.moleRandomizer();
    }
  }

  //* If mole should be generated, this function finds a place for the new mole to be displayed
  generateRandomMole() {
    let selectedTile!: number;

    this.getVisibleMoles();
    if (this.currentMolesOnBoard < this.maximumVisibleMoles) {
      if (this.gameboardData.gameActive) {
        selectedTile = Math.floor(Math.random() * 24);

        while (this.gameboardData.tiles[selectedTile].moleVisible) {
          selectedTile = Math.floor(Math.random() * 24);
        }
        //* Returning the tile where the mole will be visible, where no mole is currently visible or where a timer is currently running for the previous mole
        this.showMole(selectedTile);
        //! RETURN?
      }
    }
  }

  //* Called when generating a mole on gameboard
  showMole(mole: number) {
    this.gameboardData.tiles[mole].moleTimer = 0;
    this.gameboardData.tiles[mole].moleVisible = true;

    let molelaugh = new Audio();
    molelaugh.src = '../../assets/molelaugh.wav';
    molelaugh.load();
    molelaugh.volume = 0.3;
    molelaugh.play();

    this.currentMolesOnBoard++;

    //* Get time when mole is visible
    this.gameboardData.tiles[mole].clickTimerSub = new Date().getTime();

    //* Subscribe
    this.gameboardData.tiles[mole].moleSubscription =
      this.moleCountdownTimer.subscribe((val) => {
        //* If game is active, the timer for the mole will count to 4
        if (this.gameboardData.gameActive) {
          val++;
          this.gameboardData.tiles[mole].moleTimer = val;
          console.log('Moletimer: ' + this.gameboardData.tiles[mole].moleTimer);

          //* If mole is not clicked, unsubscribe and reset mole
          if (this.gameboardData.tiles[mole].moleTimer === 4) {
            console.log(
              'Mole wasnt clicked, set moleVisible property back to false again '
            );
            this.resetMole(mole);
            this.gameboardData.tiles[mole].moleTimer = 0;
            this.gameboardData.tiles[mole].moleSubscription.unsubscribe();
            this.gameboardData.tiles[mole].moleSubscription = null;

            val = 0;
          }
        }
      });
  }

  resetGameBoard() {
    this.gameboardData.tiles.forEach((el) => {
      el.hit = false;
      el.moleVisible = false;
    });
  }

  //* Generated moles with a random delay
  moleRandomizer() {
    this.getVisibleMoles();
    if (this.currentMolesOnBoard < this.maximumVisibleMoles) {
      setTimeout(() => {
        this.generateRandomMole();
      }, this.generateMoleDelayDisplayTime()); //* Delayrandomizer
    }
  }

  //* Helper function - Generates a random delaytime before the next mole is generated
  generateMoleDelayDisplayTime(): number {
    return (
      Math.random() *
        (this.maxDelayUntilDisplayMole - this.minDelayUntilDisplayMole) +
      this.minDelayUntilDisplayMole
    );
  }

  //* Helper function - Returns the number of currently visible moles on the board
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
