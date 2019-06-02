import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PagesCommunicationService } from 'src/app/services/pages-communication.service';
import { Facts } from 'src/app/models/fact.model';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.scss']
})
export class FactsListComponent implements OnInit {
  facts: Facts[]= [];

  constructor(
    private getDatasService: PagesCommunicationService,
    private location : Location) { }

  ngOnInit() {
    /* getting datas from page 1 through a service */
    this.facts = this.getDatasService.sendFacts();
  }

  goBack(): void{
    this.location.back();
  }

}
