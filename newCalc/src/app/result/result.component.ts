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
        if (this.result =='NaN')
        this.result = "No Entered Number. Try Again";
          break;
      case '-':
        this.result= (parseInt(this.firstNumber)-parseInt(this.secondNumber)).toString();
        if (this.result == 'NaN')
        this.result = "No Entered Number. Try Again"; 
        break;
      case 'x':
        this.result= (parseInt(this.firstNumber)*parseInt(this.secondNumber)).toString();
        if (this.result == 'NaN')
        this.result = "No Entered Number. Try Again";  
        break;
      case '/':
        this.result= (parseInt(this.firstNumber)/parseInt(this.secondNumber)).toString();
        if (this.result == 'NaN')
        this.result = "No Entered Number. Try Again";  
        break;
      default:
          alert("No Operation Input. Try Again");
           break;
  }
}

  constructor() { }

  ngOnInit(): void {
  }

  

}
