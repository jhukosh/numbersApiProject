import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NumbersApiDatasService {
  dateUrl = '/date';

  constructor(private http: HttpClient) { }

  /* getting datas from API */
  getDateFacts(date): Observable<any> {
    const url =`${this.dateUrl}/${date}`;
    return this.http.get(url).pipe(
    catchError(this.handleError([]))
    );
  }

  /* to log error and let the app run by returning an empty array */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
