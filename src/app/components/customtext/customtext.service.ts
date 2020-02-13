import {Injectable, Optional} from '@angular/core';
import {CustomTextDefs} from "./customtext.interfaces";
import {IqbComponentsConfig} from "../iqb-components.classes";

@Injectable({
  providedIn: 'root'
})
export class CustomtextService {
  public updateCount = 0;
  private _customTexts: {[key: string]: string} = {};
  private myConfig: IqbComponentsConfig;

  constructor(config: IqbComponentsConfig) {
    this.myConfig = config;
  }

  addCustomTexts(newTexts: {[key: string]: string}) {
    for (const key in newTexts) {
      this._customTexts[key] = newTexts[key];
    }
    this.updateCount += 1
  }

  addCustomTextsFromDefs(newTexts: CustomTextDefs) {
    for (const key in Object.keys(newTexts)) {
      this._customTexts[key] = newTexts[key].defaultvalue;
    }
    this.updateCount += 1
  }

  getCustomText(key: string, @Optional() defaultReturn: string = ''): string {
    if (this._customTexts[key]) {
      return this._customTexts[key]
    } else if (defaultReturn) {
      return defaultReturn
    } else {
      return key
    }
  }
}
