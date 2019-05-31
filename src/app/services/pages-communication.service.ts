import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesCommunicationService {
  facts = [];

  constructor() { }

  getFacts(facts){
    this.facts = facts;
  }

  sendFacts(){
    return this.facts
  }

}
