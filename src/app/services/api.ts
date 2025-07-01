import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://tu-api.com/endpoint';

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}