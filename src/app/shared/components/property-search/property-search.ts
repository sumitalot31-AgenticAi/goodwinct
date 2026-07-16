import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchOptionService } from '../../../core/services/search-option.service';
import { SearchOptions } from '../../../core/interfaces/search-option.interface';

@Component({
  selector: 'app-property-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './property-search.html',
  styleUrl: './property-search.scss',
})
export class PropertySearch {

  private readonly optionService = inject(SearchOptionService);

  readonly options: SearchOptions =
    this.optionService.getOptions();

  propertyType = 'All Properties';
  status = 'All Status';
  location = 'All Locations';
  budget = 'Any Budget';

  search(): void {

    console.log({
      propertyType: this.propertyType,
      status: this.status,
      location: this.location,
      budget: this.budget,
    });

  }

}