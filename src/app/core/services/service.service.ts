import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _HttpClient: HttpClient) {}
  getServiceData(): Observable<Service> {
    return this._HttpClient.get<Service>(`${environment.apiUrl}/api/service`);
  }
  showSpecificServiceData(id: string): Observable<Service> {
    return this._HttpClient.get<Service>(
      `${environment.apiUrl}/api/service/${id}`
    );
  }
  addServiceData(data: Service): Observable<Service> {
    return this._HttpClient.post<Service>(
      `${environment.apiUrl}/api/service`,
      data,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
  deleteServiceData(id: string): Observable<Service> {
    return this._HttpClient.delete<Service>(
      `${environment.apiUrl}/api/service/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
}
