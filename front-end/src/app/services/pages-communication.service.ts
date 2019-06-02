import { Injectable } from '@angular/core';

import { Facts } from 'src/app/models/fact.model';

@Injectable({
  providedIn: 'root'
})
export class PagesCommunicationService {
  facts: Facts[] = localStorage.getItem('facts') ? JSON.parse(localStorage.getItem('facts')) : [];

  /* getting facts objects from page 1 */
  getFacts(facts): void{
    this.facts.push(facts);
    this.saveToLocalStorage();
  }

  /* sending facts collection to page 2 */
  sendFacts(): Facts[]{
    return this.facts
  }

  /* saving into local storage to get the visitor a complete collection in page 2 */
  saveToLocalStorage(): void {
    localStorage.setItem('facts', JSON.stringify(this.facts));
  }

}
