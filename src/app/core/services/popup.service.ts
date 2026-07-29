import { Injectable } from '@angular/core';

import popupData from '../../../assets/data/popup.json';

import { Popup } from '../interfaces/popup.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  getPopup(): Popup {
    return popupData as Popup;
  }
}