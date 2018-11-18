/*
 * Issue Service to handle http requests with the server to
 * manipulate issues.
 *
 * /src/app/issue.service.ts
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://192.168.0.33:4000';
  // uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  /*
   * Get all issues (GET).
   */
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  /*
   * Get issue by ID (GET).
   */
  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  /*
   * Add an issue (POST).
   */
  addIssue(title, responsible, description, severity) {
    // issue
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };

    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  /*
   * Update an issue (POST).
   */
  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };

    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  /*
   * Delete an issue (GET).
   */
  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
