import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private _HttpClient: HttpClient) {}
  getEducationData(): Observable<Education> {
    return this._HttpClient.get<Education>(`${environment.apiUrl}/api/education`);
  }
  showSpecificEducationData(id: string): Observable<Education> {
    return this._HttpClient.get<Education>(
      `${environment.apiUrl}/api/education/${id}`
    );
  }
  addEducationData(data: Education): Observable<Education> {
    return this._HttpClient.post<Education>(
      `${environment.apiUrl}/api/education`,
      data,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
  deleteEducationData(id: string): Observable<Education> {
    return this._HttpClient.delete<Education>(
      `${environment.apiUrl}/api/education/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
}
