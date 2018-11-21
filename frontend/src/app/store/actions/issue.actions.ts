import { Action } from "@ngrx/store";


export const SEVERITY_ADD = '[Severity] Add';

export class SeverityAddAction implements Action {
  type = SEVERITY_ADD;

  constructor(public payload: string) {}
}

export type Actions = SeverityAddAction;
