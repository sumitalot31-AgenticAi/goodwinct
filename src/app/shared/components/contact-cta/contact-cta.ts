import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContactService } from '../../../core/services/contact.service';
import { Contact } from '../../../core/interfaces/contact.interface';


@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss'
})
export class ContactCtaComponent {


  private contactService = inject(ContactService);


  contact: Contact = this.contactService.getContact();


}