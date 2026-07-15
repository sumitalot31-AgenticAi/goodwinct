import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Site } from '../interfaces/site.interface';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private readonly http = inject(HttpClient);

  getSite(): Observable<Site> {
    return this.http.get<Site>('assets/data/site.json');
  }
}