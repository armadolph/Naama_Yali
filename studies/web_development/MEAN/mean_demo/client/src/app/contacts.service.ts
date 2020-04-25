import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact'
import { HAMMER_LOADER } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts');
  }

  addContact(newContact)
  {
    var headers = new HttpHeaders();
    headers.append('Content->Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact, {headers:headers});
  }

  deleteContact(id)
  {
    return this.http.delete('http://localhost:3000/api/contacts/' + id);
  }

}
