import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NumbersComponent } from '../numbers/numbers.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() firstNumber = '';
  @Input() secondNumber = '';
  @Input() op = '';

  result = "";

  onClick(value: string){

    value = this.op;

    switch(value) {
      case '+':
        this.result= (parseInt(this.firstNumber)+parseInt(this.secondNumber)).toString();
          break;
      case '-':
        this.result= (parseInt(this.firstNumber)-parseInt(this.secondNumber)).toString();
          break;
      case 'x':
        this.result= (parseInt(this.firstNumber)*parseInt(this.secondNumber)).toString();
          break;
      case '/':
        this.result= (parseInt(this.firstNumber)/parseInt(this.secondNumber)).toString();
          break;
      default:
          alert("Invalid");
           break;
  }
}

  constructor() { }

  ngOnInit(): void {
  }

  

}
