import { Component, inject } from '@angular/core';

import { WhyChooseUsService } from '../../../core/services/why-choose-us.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
})
export class WhyChooseUs {

  private readonly whyChooseUsService = inject(WhyChooseUsService);

  readonly data = this.whyChooseUsService.getWhyChooseUs();

}