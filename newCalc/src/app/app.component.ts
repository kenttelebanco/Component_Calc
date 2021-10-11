import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newCalc';
  items = ['0', '3'];
  operation = '';
  firstNum = '';
  secondNum = '';
  n = 0;

  addItem(newItem: any) {
    this.operation = newItem;
  }

  addNum(newItem: string) {

    if (this.n==0){
    this.firstNum = newItem;
    this.n++}
    else
    this.secondNum = newItem;
  }
  
  }
