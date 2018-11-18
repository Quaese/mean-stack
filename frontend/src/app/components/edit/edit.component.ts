/*
 * Component to edit/update an issues.
 *
 * frontend/src/app/components/edit/edit.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  id: string;
  issue: any = {};
  updateForm: FormGroup;

  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private builder: FormBuilder
  ) {
    // create form group before ngOnInit fires
    this.createForm();
  }

  /*
   * Create a form group that holds the form elements to update/edit an issue.
   */
  createForm() {
    this.updateForm = this.builder.group({
      title: ['', Validators.required],
      responsible: [''],
      description: [''],
      severity: [''],
      status: ['']
    });
  }

  ngOnInit() {
    // get params from route.params Observable
    this.route.params.subscribe(params => {
      // get ID
      this.id = params.id;

      // subscribe to issueService to get the issue that should be edited
      this.issueService.getIssueById(this.id).subscribe(res => {
        // save issue from response to class property
        this.issue = res;

        // update form elements
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      })
    });
  }

  /*
   * Edit/update issue with new values from form.
   */
  updateIssue(title, responsible, description, severity, status) {
    console.log('editComponent: ', this.updateForm.get('severity'));
    this.issueService
      .updateIssue(this.id, title, responsible, description, severity || this.updateForm.get('severity').value, status)
      .subscribe(() => {
        this.snackBar.open('Issue updated successfully', 'OK', {
          duration: 3000
        });
      });
  }

}
