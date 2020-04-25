import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service'
import {Contact} from '../contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactrService: ContactsService) { 
    this.contacts = null;
  }

  ngOnInit(): void {
    this.updateContactList()
  }

  updateContactList(): void{
    this.contactrService.getContacts().subscribe(contacts => this.contacts = <Contact[]>contacts);
  }

  deleteContact(id: any) {
    var contacts = this.contacts
    this.contactrService.deleteContact(id).subscribe(data => {
      this.updateContactList();
    });
  }

  addNewContact(): void{
    const newContact = {
      "first_name": this.first_name,
      "last_name": this.last_name,
      "phone": this.phone
    };
    this.contactrService.addContact(newContact).subscribe(() => {
      this.updateContactList()
      this.first_name = ""
      this.last_name = ""
      this.phone = ""
    });
  }
}
