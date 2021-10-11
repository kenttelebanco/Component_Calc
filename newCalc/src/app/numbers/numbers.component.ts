import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNumber(value: string) {
    this.newItemEvent.emit(value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
