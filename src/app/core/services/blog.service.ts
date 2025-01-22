import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private _HttpClient: HttpClient) {}
  getBlogData(): Observable<Blog> {
    return this._HttpClient.get<Blog>(`${environment.apiUrl}/api/blog`);
  }
  showSpecificBlogData(id: string): Observable<Blog> {
    return this._HttpClient.get<Blog>(`${environment.apiUrl}/api/blog/${id}`);
  }
  addBlogData(data: Blog): Observable<Blog> {
    return this._HttpClient.post<Blog>(`${environment.apiUrl}/api/blog`, data, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  deleteBlogData(id: string): Observable<Blog> {
    return this._HttpClient.delete<Blog>(`${environment.apiUrl}/api/blog/${id}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
}
