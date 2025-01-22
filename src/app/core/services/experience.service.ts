import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../interfaces/experience';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private _HttpClient: HttpClient) {}
  getExperienceData(): Observable<Experience> {
    return this._HttpClient.get<Experience>(`${environment.apiUrl}/api/experience`);
  }
  showSpecificExperienceData(id: string): Observable<Experience> {
    return this._HttpClient.get<Experience>(
      `${environment.apiUrl}/api/experience/${id}`
    );
  }
  addExperienceData(data: Experience): Observable<Experience> {
    return this._HttpClient.post<Experience>(
      `${environment.apiUrl}/api/experience`,
      data,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
  deleteExperienceData(id: string): Observable<Experience> {
    return this._HttpClient.delete<Experience>(
      `${environment.apiUrl}/api/experience/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
  }
}
