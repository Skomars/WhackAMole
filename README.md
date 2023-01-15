# WhackAMoleV1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

<!-- <div
      class="tile"
      (click)="_gameLogicService.whackTile(1)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[1].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[1].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(2)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[2].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[2].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(3)"
      [ngStyle]="{
        cursor: _gameLogicService.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[3].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[3].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(4)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[4].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[4].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(5)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[5].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[5].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(6)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[6].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[6].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(7)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[7].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[7].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(8)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[8].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[8].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(9)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[9].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[9].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(10)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[10].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[10].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(11)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[11].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[11].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(12)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[12].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[12].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(13)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[13].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[13].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(14)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[14].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[14].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(15)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[15].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[15].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(16)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[16].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[16].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(17)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[17].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[17].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(18)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[18].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[18].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(19)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[19].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[19].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(20)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[20].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[20].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(21)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[21].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[21].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(22)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[22].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[22].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(23)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[23].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[23].moleVisible }}
    </div>
    <div
      class="tile"
      (click)="_gameLogicService.whackTile(24)"
      [ngStyle]="{
        cursor: gameBoard.gameActive === true ? 'pointer' : 'default'
      }"
      [ngClass]="gameBoard.tiles[24].moleVisible ? 'moleVisible' : 'moleHidden'"
    >
      {{ gameBoard.tiles[24].moleVisible }}
    </div> -->
