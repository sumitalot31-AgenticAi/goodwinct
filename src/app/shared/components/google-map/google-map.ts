import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ContactService } from '../../../core/services/contact.service';


@Component({
  selector: 'app-google-map',
  standalone: true,
  templateUrl: './google-map.html',
  styleUrl: './google-map.scss'
})
export class GoogleMapComponent {


  private sanitizer = inject(DomSanitizer);

  private contactService = inject(ContactService);


  contact = this.contactService.getContact();


  mapUrl: SafeResourceUrl = 
    this.sanitizer.bypassSecurityTrustResourceUrl(
      this.contact.mapUrl
    );


}