import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumbersApiDatasService {
  factUrl = '/fact';
  mathUrl ='/math';
  dateUrl = '/date';

  constructor(private http: HttpClient) { }

  getTrivia(num: number): Observable<any> {
    const factId = num;
    const url = `${this.factUrl}/${factId}`;
    return this.http.get(url);
  }

  getMath(num: number): Observable<any> {
    const mathId = num;
    const url = `${this.mathUrl}/${mathId}`;
    return this.http.get(url);
  }

  getDateFacts(date): Observable<any> {
    const url =`${this.dateUrl}/${date}`;
    return this.http.get(url);
  }
}
