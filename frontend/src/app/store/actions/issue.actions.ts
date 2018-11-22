import { Action } from "@ngrx/store";


export const SEVERITY_ADD = '[Severity] Add';

/*
 * Beispiel Action zum Dispatchen in der Chrome Redux-Erweiterung:
 * {type: '[Severity] Add', payload: 'Lowest'}
 */
export class SeverityAddAction implements Action {
  type = SEVERITY_ADD;

  constructor(public payload: string) {}
}

export type Actions = SeverityAddAction;
