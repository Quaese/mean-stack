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
  createForm: FormGroup;

  constructor(
    private issueService: IssueService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.builder.group({
      title: ['', Validators.required],
      responsible: [''],
      description: [''],
      severity: ['']
    });
  }

  addIssue(title, responsible, description, severity) {
    this.issueService
      .addIssue(title, responsible, description, severity)
      .subscribe(() => {
        this.router.navigate([`/list`]);
      });
  }

  ngOnInit() {
  }

}
