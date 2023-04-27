import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { ActionsButtonsComponent } from './components/actions-buttons/actions-buttons.component';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent, ActionsButtonsComponent],
  imports: [BrowserModule, StoreModule.forRoot(appReducer, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
