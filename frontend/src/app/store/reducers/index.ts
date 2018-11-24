import { IssueState } from './../../models/store.model';
import { reducer as issueReducer } from './issue.reducer';

export interface State {
  issueState: IssueState;
}

export const reducers = {
  issueState: issueReducer
}
