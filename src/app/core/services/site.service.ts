import { Injectable } from '@angular/core';

import siteData from '../../../assets/data/site.json';
import { Site } from '../interfaces/site.interface';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  getSite(): Site {
    return siteData as Site;
  }
}