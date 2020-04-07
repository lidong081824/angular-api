import { Directive, Input, ElementRef, OnInit, OnChanges, TemplateRef, EmbeddedViewRef, NgZone } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit, OnChanges {

  @Input() appTest: ElementRef | string;
  private hostEle: HTMLDivElement;
  private viewRef: EmbeddedViewRef<TemplateRef<null>>;

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.hostEle = this._initHostele();
      this.setTest();
      console.log(this.viewRef);
    });
  }

  setTest() {

  }

  private _initHostele() {
    const ptest = document.querySelector('p');
    const hostEle = document.createElement('div');
    ptest.insertAdjacentElement('afterend', hostEle);
    return hostEle;
  }

}
