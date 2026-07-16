import { Injectable } from '@angular/core';

import options from '../../../assets/data/search-options.json';

import { SearchOptions } from '../interfaces/search-option.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchOptionService {

  getOptions(): SearchOptions {
    return options as SearchOptions;
  }

}