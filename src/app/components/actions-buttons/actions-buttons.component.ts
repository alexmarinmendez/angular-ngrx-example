import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import {
  decrease,
  increment,
  reset,
} from 'src/app/store/counter/counter.actions';

@Component({
  selector: 'app-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.css'],
})
export class ActionsButtonsComponent {
  constructor(private readonly store: Store<AppState>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
