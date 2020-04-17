import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputbg]'
})
export class InputbgDirective {
  possibleColors = [
    'red', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  @HostBinding('style.border-color') hostBorderColor: any;
  @HostBinding('style.color') hostColor: any;
  @HostListener('keydown') onkeydown() {
    const roundColorInx = Math.floor(Math.random() * this.possibleColors.length);
    this.hostBorderColor = this.hostColor = this.possibleColors[roundColorInx];
  }

  constructor() { }

}
