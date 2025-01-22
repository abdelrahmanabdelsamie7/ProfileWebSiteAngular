import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _HttpClient: HttpClient) {}
  getContactData(): Observable<Contact> {
    return this._HttpClient.get<Contact>(`${environment.apiUrl}/api/contact`);
  }
  showSpecificContactData(id: string): Observable<Contact> {
    return this._HttpClient.get<Contact>(`${environment.apiUrl}/api/contact/${id}`);
  }
  addContactData(data: Contact): Observable<Contact> {
    return this._HttpClient.post<Contact>(
      `${environment.apiUrl}/api/contact`,
      data,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
  deleteContactData(id: string): Observable<Contact> {
    return this._HttpClient.delete<Contact>(
      `${environment.apiUrl}/api/contact/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
}
