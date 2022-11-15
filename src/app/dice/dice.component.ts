import { Component, OnInit } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  dice: Array<number> = [this.randomThrow()];
  diceRoll: Observable<number> = of(null);
  infoDisplayed: boolean = false;
  buttonsDisabled: boolean = false;
  count: Array<number> = [0, 0, 0, 0, 0, 0];
  sum: number;

  constructor() { }

  ngOnInit(): void {
    this.updateInfo()
  }

  throwDice(index: number): void {
    let roll: any;
    roll = merge(
      this.diceRoll.pipe(delay(50), map(() => {
        this.dice[index] = this.randomThrow();
      })),
      this.diceRoll.pipe(delay(100), map(() => {
        this.dice[index] = this.randomThrow();
      })),
      this.diceRoll.pipe(delay(200), map(() => {
        this.dice[index] = this.randomThrow();
      })),
      this.diceRoll.pipe(delay(350), map(() => {
        this.dice[index] = this.randomThrow();
      })),
      this.diceRoll.pipe(delay(550), map(() => {
        this.dice[index] = this.randomThrow();
      })),
      this.diceRoll.pipe(delay(800), map(() => {
        this.dice[index] = this.randomThrow();
      })),
      this.diceRoll.pipe(delay(1100), map(() => {
        this.dice[index] = this.randomThrow();
        this.updateInfo();
      }))
    );
    roll.subscribe();
  }

  throwAllDice(): void {
    for(let index in this.dice) {
      this.throwDice(parseInt(index));
    }

  }

  toggleInfo(): void {
    this.infoDisplayed = !this.infoDisplayed;
  }

  addDice(): void {
    this.dice.push(this.randomThrow());
    this.updateInfo();
  }

  removeDice(): void {
    this.dice.pop();
    this.updateInfo();
  }

  resetDice(): void {
    this.dice = [this.randomThrow()];
    this.updateInfo();
  }

  randomThrow(): number {
    return Math.floor(Math.random() * (6) + 1);
  }

  updateInfo(): void {
    for(let index in this.count){
      let i = parseInt(index);
      this.count[i] = this.dice.filter(x => x == i+1).length;
    }
    this.sum = this.dice.reduce((acc, current) => {return acc+current});
  }

  toggleButtons(): void {
    this.buttonsDisabled = !this.buttonsDisabled
  }

}

