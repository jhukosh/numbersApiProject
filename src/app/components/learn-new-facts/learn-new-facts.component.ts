import { Component } from '@angular/core';
import { NumbersApiDatasService } from 'src/app/services/numbers-api-datas.service';
import { PagesCommunicationService } from 'src/app/services/pages-communication.service';
import { Facts } from 'src/app/models/fact.model';

@Component({
  selector: 'app-learn-new-facts',
  templateUrl: './learn-new-facts.component.html',
  styleUrls: ['./learn-new-facts.component.scss']
})
export class LearnNewFactsComponent {
  datesToCheck;
  factsArr : Facts[] = [];
  factsObj : Facts; // Object creation to make sure each fact corresponds to its date and avoid async issues
  enableClick = false;

  constructor(
    private getApiDatasService: NumbersApiDatasService, 
    private sendDatasService: PagesCommunicationService) 
    { }

  /* Method called on click */

  getFacts(){
    /* disabling button during api call */
    this.enableClick = true;

    /* changing property to array to get every date */
    const dates = this.datesToCheck.split(', ');

    /* calling datas as object for each date */

    for (const i of dates){
      this.getApiDatasService.getDateFacts(i)
      .subscribe(dateFact => {
        this.factsObj = {
          date: i,
          fact: dateFact
        };

        /* sending datas to page 2 */
        this.sendDatasService.getFacts(this.factsObj);

        /* pushing to display in component view */
        this.factsArr.push(this.factsObj);
      });
    }

    this.datesToCheck = '';
    this.enableClick = false;
  }

}
