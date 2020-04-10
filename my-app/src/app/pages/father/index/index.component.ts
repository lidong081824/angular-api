import { TestDirective } from 'app/core/directive/test.directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  list = [];

  constructor(
    private aaa: TestDirective
  ) { }

  ngOnInit(): void {
    console.log(this.aaa.appTest);
  }

  add() {
    this.list.push({ name: '小明' });
  }

}
