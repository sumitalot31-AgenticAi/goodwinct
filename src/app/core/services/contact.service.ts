import { Injectable } from '@angular/core';

import { Contact } from '../interfaces/contact.interface';

import contactData from '../../../assets/data/contact.json';


@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private contact: Contact = contactData;



  getContact(): Contact {

    return this.contact;

  }


}