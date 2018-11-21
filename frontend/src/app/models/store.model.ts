export interface IssueState {
  severity: Array<string>;
}

export interface AppState {
  store: IssueState;
}
