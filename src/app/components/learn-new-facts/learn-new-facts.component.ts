import { Component, OnInit } from '@angular/core';
import { NumbersApiDatasService } from 'src/app/services/numbers-api-datas.service';
import { PagesCommunicationService } from 'src/app/services/pages-communication.service';
import { Facts } from 'src/app/models/fact.model';

@Component({
  selector: 'app-learn-new-facts',
  templateUrl: './learn-new-facts.component.html',
  styleUrls: ['./learn-new-facts.component.scss']
})
export class LearnNewFactsComponent implements OnInit {
  fact;
  math;
  dates = [];
  datesToCheck;
  factsArr : Facts[] = [];
  factsObj : Facts;

  constructor(
    private getApiDatasService: NumbersApiDatasService, 
    private sendDatasService: PagesCommunicationService) 
    { }

  ngOnInit() {
    this.getApiDatasService.getTrivia(42)
      .subscribe(fact => {
        this.fact = fact
      });

    this.getApiDatasService.getMath(5)
      .subscribe(math => {
        this.math = math
        console.log(this.math)
      });
  }

  getFacts(){
    this.dates = this.datesToCheck.split(', ');

    for (let i = 0; i < this.dates.length; i++){
      this.getApiDatasService.getDateFacts(this.dates[i])
      .subscribe(dateFact => {
        this.factsObj = {
          date: this.dates[i],
          fact: dateFact
        };
        this.factsArr.push(this.factsObj);
      });
    }
    this.sendDatasService.getFacts(this.factsArr);

    this.datesToCheck='';
  }

}
