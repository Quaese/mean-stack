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

  constructor(private store: Store<AppState>) {
    this.store$ = store.select(val => val.store);
  }

  getStore() {
    return this.store$;
  }
}
