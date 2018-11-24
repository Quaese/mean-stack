import { IssueState } from './../models/store.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers/index';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private issueState$: Observable<IssueState>;
  private severity$: Observable<Array<string>>;

  constructor(private store: Store<State>) {
    this.issueState$ = store.select(val => val.issueState);
    this.severity$ = store.select(val => val.issueState.severity);
  }

  getIssueState$() {
    return this.issueState$;
  }

  getSeverity$() {
    return this.severity$;
  }
}
