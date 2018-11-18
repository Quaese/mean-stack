/*
 * Component to list all issues in a table (angualar/material).
 *
 * frontend/src/app/components/list/list.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from 'src/app/models/issue.model';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit() {
    // fetch all issues on init
    this.fetchIssues();
  }

  /*
   * Fetch all issues using the issueService.
   */
  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  /*
   * Event handler => redirect/navigates to EditComponent.
   */
  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  /*
   * Delete an issue using the issueService.
   */
  deleteIssue(id) {
    this.issueService
      .deleteIssue(id)
      .subscribe(() => {
        this.fetchIssues();
      });
  }

}
