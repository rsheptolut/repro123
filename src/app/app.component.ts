import { Component } from '@angular/core';

import { SelectOption } from './select-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  i = 4;
  public options = [ 1, 2, 3 ].map(i => new SelectOption('Item ' + i, 'Item ' + i));
  public value: any;

  public pushOption(regenerate: boolean): void {
    const newStr = 'Item ' + this.i++;
    if (regenerate) {
      // Simulates getting a new array from the server, which contains essentially the same options
      // Works on v8 always but on v9 with BrowserAnimationsModule imported - this breaks.
      // Can still be fixed by using trackBy
      this.options = this.options.map(o => o.value).concat(newStr).map(o => new SelectOption(o, o));
    } else {
      // Works always. Simulates careful client-side mutation
      this.options = [].concat(this.options).concat(new SelectOption(newStr, newStr));
    }
  }

  public trackItem(index: number, item: SelectOption) {
    return item.value;
  }
}
