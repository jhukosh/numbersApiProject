import { Component, OnInit } from '@angular/core';
import { NumbersApiDatasService } from 'src/app/services/numbers-api-datas.service';

@Component({
  selector: 'app-learn-new-facts',
  templateUrl: './learn-new-facts.component.html',
  styleUrls: ['./learn-new-facts.component.scss']
})
export class LearnNewFactsComponent implements OnInit {
  fact;
  math;
  dateFact = [];
  dates = [];
  datesToCheck;

  constructor(private getApiDatasService: NumbersApiDatasService) { }

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
    console.log(this.dates);

    for (let i = 0; i < this.dates.length; i++){
    this.getApiDatasService.getDateFacts(this.dates[i])
      .subscribe(dateFact => {
        this.dateFact.push(dateFact)
      });
    }
    console.log(this.dateFact);
    this.datesToCheck='';
  }

}
