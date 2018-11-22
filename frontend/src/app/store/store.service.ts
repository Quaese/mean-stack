import { IssueState } from './../models/store.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private store$: Observable<IssueState>;
  private severity$: Observable<Array<string>>;

  constructor(private store: Store<AppState>) {
    this.store$ = store.select(val => val.store);
    this.severity$ = store.select(val => val.store.severity);
  }

  getStore$() {
    return this.store$;
  }

  getSeverity$() {
    return this.severity$;
  }
}
