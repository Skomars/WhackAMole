import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  numbers = interval(1000);

  gametime: number = 20;
  currentCountervalue: number = this.gametime;
  timeSettingCounter: number = this.gametime;
  gameMessage: string = 'Game is finished!';
  buttonDisabled: boolean = false;

  countdownEngine = this.numbers.pipe(take(this.timeSettingCounter));
  startWhacking() {
    this.countdownEngine.subscribe((val) => {
      if (val <= this.timeSettingCounter) {
        this.buttonDisabled = true;
        this.currentCountervalue--;
        console.log(this.currentCountervalue);
      }
      if (this.currentCountervalue === 0) {
        this.buttonDisabled = false;
        this.currentCountervalue = this.gametime;
      }
    });
  }
}
