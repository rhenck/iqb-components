import { Component } from '@angular/core';
import {CustomtextService} from "../components/customtext/customtext.service";

@Component({
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {

  customTextValues = {
    ctv4: '',
    ctv5: '',
    ctv6: ''
  };

  constructor(
      private cts: CustomtextService
  ) { }

  applyCustomTexts() {
    let myCustomTexts: {[key: string]: string} = {};
    myCustomTexts['ctv4'] = this.customTextValues.ctv4;
    myCustomTexts['ctv5'] = this.customTextValues.ctv5;
    myCustomTexts['ctv6'] = this.customTextValues.ctv6;
    this.cts.addCustomTexts(myCustomTexts);
  }
}
