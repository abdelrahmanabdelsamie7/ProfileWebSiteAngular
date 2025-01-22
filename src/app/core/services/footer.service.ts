import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footer } from '../interfaces/footer';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private _HttpClient: HttpClient) {}
  getFooterData(): Observable<Footer> {
    return this._HttpClient.get<Footer>(`${environment.apiUrl}/api/footer`);
  }
  showSpecificFooterData(id: string): Observable<Footer> {
    return this._HttpClient.get<Footer>(`${environment.apiUrl}/api/footer/${id}`);
  }
  addFooterData(data: Footer): Observable<Footer> {
    return this._HttpClient.post<Footer>(`${environment.apiUrl}/api/footer`, data, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  deleteFooterData(id: string): Observable<Footer> {
    return this._HttpClient.delete<Footer>(
      `${environment.apiUrl}/api/footer/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
}
