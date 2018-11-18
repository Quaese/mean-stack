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
    this.createForm();
  }

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
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;

        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      })
    });
  }

  updateIssue(title, responsible, description, severity, status) {
    this.issueService
      .updateIssue(this.id, title, responsible, description, severity, status)
      .subscribe(() => {
        this.snackBar.open('Issue updated successfully', 'OK', {
          duration: 3000
        });
      });
  }

}
