import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  list = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.list.push({ name: '小明', age: 18 });
  }

}
