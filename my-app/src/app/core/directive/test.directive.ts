import { Directive, Input, ElementRef, OnInit, OnChanges, TemplateRef, EmbeddedViewRef, NgZone, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit, OnChanges {

  @Input() appTest: TemplateRef<null> | string;
  hostEle: HTMLDivElement;
  embeddedViewRef: EmbeddedViewRef<TemplateRef<null>>;

  constructor(
    private ngZone: NgZone,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.hostEle = this._initHostele();
      this.setHostEle();
    });
  }

  setHostEle() {
    setTimeout(() => {
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.appTest as TemplateRef<null>);
      this.embeddedViewRef.rootNodes.forEach(rootNode => this.hostEle.appendChild(rootNode));
      this.embeddedViewRef.detectChanges();
    });
  }

  private _initHostele() {
    const hostEle = document.createElement('div');
    hostEle.style.cssText = `
      border-style: solid;
      border-color: grey;
      border-width: 1px;
      padding: 10px;
      text-align: right;
      margin-top: -1px;
    `;
    const ptest = document.querySelector('div');
    ptest.insertAdjacentElement('afterend', hostEle);
    return hostEle;
  }

}
