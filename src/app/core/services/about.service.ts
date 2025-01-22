import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../interfaces/about';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private _HttpClient: HttpClient) {}
  getAboutMeData(): Observable<About> {
    return this._HttpClient.get<About>(`${environment.apiUrl}/api/about`);
  }
  showSpecificAboutData(id: string): Observable<About> {
    return this._HttpClient.get<About>(`${environment.apiUrl}/api/about/${id}`);
  }
  addAboutMeData(data: About): Observable<About> {
    return this._HttpClient.post<About>(`${environment.apiUrl}/api/about`, data, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  deleteAboutMeData(id: string): Observable<About> {
    return this._HttpClient.delete<About>(`${environment.apiUrl}/api/about/${id}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
}
