import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onQuickSort(arr: any) {
    if (typeof (arr) === 'string') {
      if (!Array.isArray(arr)) {
        arr = [arr];
      } else {
        arr = JSON.parse(arr);
      }
    }

    if (arr.length <= 1) {
      return arr;
    }

    const centelIndex = Math.floor(arr.length / 2);
    const centelValue = arr.splice(centelIndex, 1);
    const leftArr = []; const rightArr = [];
    arr.forEach((ele) => {
      if (ele < centelValue) {
        leftArr.push(ele);
      } else {
        rightArr.push(ele);
      }
    });
    return this.onQuickSort(leftArr).concat([centelValue], this.onQuickSort(rightArr));
  }

}
