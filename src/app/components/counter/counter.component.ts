import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import {
  counterStateSelector,
  counterStateValueSelector,
  multiplyValueSelector,
} from 'src/app/store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public value: number = 0;

  constructor(private readonly store: Store<AppState>) {
    // this.store
    //   .select('counterState')
    //   .subscribe((state) => (this.value = state.value));
    // this.store
    //   .select(counterStateSelector)
    //   .subscribe((state) => (this.value = state.value));
    this.store
      .select(counterStateValueSelector)
      .subscribe((stateValue) => (this.value = stateValue));
    this.store.select(multiplyValueSelector).subscribe(console.log);
  }
}
