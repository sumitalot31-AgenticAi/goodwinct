import { Injectable } from '@angular/core';

import statsData from '../../../assets/data/stats.json';

import { Stats } from '../interfaces/stats.interface';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  getStats(): Stats {

    return statsData as Stats;

  }

}