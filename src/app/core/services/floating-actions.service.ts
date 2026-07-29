import { Injectable } from '@angular/core';

import data from '../../../assets/data/floating-actions.json';
import { FloatingActions } from '../interfaces/floating-actions.interface';

@Injectable({
  providedIn: 'root',
})
export class FloatingActionsService {
  getData(): FloatingActions {
    return data as FloatingActions;
  }
}