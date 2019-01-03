import { Component, Input, Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({selector: '[myAttrDir]'})
export class MyAttrDirective {
  @HostBinding('style.color') @Input() color: string;
  @HostBinding('style.background-color') bgColorMouse: string;
  @Input() bgColor: string;
  @HostListener('mouseover', ['$event']) onMouseover(event) {
    this.bgColorMouse = this.bgColor;
    console.log(event);
  }
}
@Directive({
  selector: '[myAttrDir2]',
  host: {
    '[style.color]': 'color',
    '(mouseover)': 'onMouseover($event)',
    '[style.background-color]': 'bgcolorMouse'
  }
})
export class MyAttrDirective2 {
  @Input() color: string;
  @Input() bgcolor: string;
  bgcolorMouse: string;
  // construcotr(private _elRef: ElementRef) {}
  onMouseover(event) {
    // this._elRef.nativeElement.style.backgroundColor = this.bgcolor;
    this.bgcolorMouse = this.bgcolor;
  }
}
@Component({
  selector: 'app-qa-header',
  template: `<h1>{{title}}</h1>
             <div myAttrDir [color]=" 'blue' " [bgColor]="myBgcolor"> stackoverflow question and answers</div>
             <div myAttrDir2 [color]= " 'green' " bgcolor="yellow">more answers</div>
  `,
  styles: [`h1 { color: steelblue; text-align: center; font-size: large; margin: 0.5em;}`]
})
export class QaHeaderComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('myTitle') title: string;
  myBgcolor = 'orange';

}
