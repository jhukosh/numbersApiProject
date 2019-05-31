import { Injectable } from '@angular/core';
import { Facts } from 'src/app/models/fact.model';

@Injectable({
  providedIn: 'root'
})
export class PagesCommunicationService {
  facts: Facts[] = localStorage.getItem('facts') ? JSON.parse(localStorage.getItem('facts')) : [];

  constructor() { }

  getFacts(facts){
    this.facts = facts;
    this.saveToLocalStorage();
    console.log(this.facts);
  }

  sendFacts(){
    return this.facts
  }

  saveToLocalStorage() {
    localStorage.setItem('facts', JSON.stringify(this.facts));
  }

}
