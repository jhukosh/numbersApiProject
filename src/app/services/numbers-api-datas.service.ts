import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumbersApiDatasService {
  dateUrl = '/date';

  constructor(private http: HttpClient) { }

  /* getting datas from API */
  
  getDateFacts(date): Observable<any> {
    const url =`${this.dateUrl}/${date}`;
    return this.http.get(url);
  }
}
