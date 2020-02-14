import {Injectable, Optional} from '@angular/core';
import {CustomTextDefs} from './customtext.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomtextService {
  public updateCount = 0;
  private customTexts: {[key: string]: string} = {};

  constructor() { }

  addCustomTexts(newTexts: {[key: string]: string}) {

    Object.keys(newTexts).forEach(key => {
      this.customTexts[key] = newTexts[key];
    });
    this.updateCount += 1;
  }

  addCustomTextsFromDefs(newTexts: CustomTextDefs) {

    Object.keys(newTexts).forEach(key => {
      this.customTexts[key] = newTexts[key].defaultvalue;
    });
    this.updateCount += 1;
  }

  getCustomText(key: string, @Optional() defaultReturn: string = ''): string {

    if (this.customTexts[key]) {
      return this.customTexts[key];
    } else if (defaultReturn) {
      return defaultReturn;
    } else {
      return key;
    }
  }
}
