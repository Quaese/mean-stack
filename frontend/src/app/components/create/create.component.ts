/*
 * Component to create new issues.
 *
 * frontend/src/app/components/create/create.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  // form group object (to group form element needed to create an issue)
  createForm: FormGroup;

  constructor(
    private issueService: IssueService,
    private builder: FormBuilder,
    private router: Router
  ) {
    // create a form group
    this.createForm = this.builder.group({
      title: ['', Validators.required],
      responsible: [''],
      description: [''],
      severity: ['']
    });
  }

  /*
   * Add new issue.
   */
  addIssue(title, responsible, description, severity) {
    // use addIssue method from issueService
    this.issueService
      .addIssue(title, responsible, description, severity)
      //subscribe to Observable and navigate to list view when ready
      .subscribe(() => {
        this.router.navigate([`/list`]);
      });
  }

  ngOnInit() {}
}
