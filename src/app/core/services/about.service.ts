import { Injectable } from '@angular/core';

import aboutData from '../../../assets/data/about.json';
import { About } from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root',
})
export class AboutService {

  getAbout(): About {
    return aboutData as About;
  }

}