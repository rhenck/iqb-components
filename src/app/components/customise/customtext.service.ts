import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomtextService {
  public updateCount = 0;
  private _customTexts: {[key: string]: string} = {};

  constructor() { }

  addCustomTexts(newTexts: {[key: string]: string}) {
    for (let key in newTexts) {
      this._customTexts[key] = newTexts[key];
    }
    this.updateCount += 1
  }

  getCustomText(key: string): string {
    if (this._customTexts.hasOwnProperty(key)) {
      return this._customTexts[key]
    } else {
      return key
    }
  }

  }
