import { Injectable } from '@angular/core';

import whyChooseData from '../../../assets/data/why-choose-us.json';

import { WhyChooseUs } from '../interfaces/why-choose-us.interface';

@Injectable({
  providedIn: 'root',
})
export class WhyChooseUsService {

  getWhyChooseUs(): WhyChooseUs {

    return whyChooseData as WhyChooseUs;

  }

}