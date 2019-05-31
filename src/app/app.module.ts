import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnNewFactsComponent } from './components/learn-new-facts/learn-new-facts.component';
import { FactsListComponent } from './components/facts-list/facts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnNewFactsComponent,
    FactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
