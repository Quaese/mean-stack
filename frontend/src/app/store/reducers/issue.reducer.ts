import { IssueState } from './../../models/store.model';
import { Actions, SEVERITY_ADD } from './../actions/issue.actions';

// initialer State
export const initialState: IssueState = {
  severity: ['Low', 'Medium', 'High']
};

export function reducer(state: IssueState = initialState, action: Actions): IssueState  {
  switch(action.type) {
    case SEVERITY_ADD:
        return {
            ...state,
            severity: [...state.severity, action.payload]
        };
  }

  return state;
}
