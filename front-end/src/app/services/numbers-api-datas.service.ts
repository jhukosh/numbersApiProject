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

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
