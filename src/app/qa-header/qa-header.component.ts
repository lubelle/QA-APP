import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qa-header',
  template: `<h1>{{title}}</h1>`,
  styles: [`h1 { color: steelblue; text-align: center; font-size: large; margin: 0.5em;}`]
})
export class QaHeaderComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('myTitle') title: string;
}
