import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BugReport } from './bug-report.interfaces';
import { Component, OnInit, Inject } from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  templateUrl: './bug-report-dialog.component.html',
  styleUrls: ['./bug-report-dialog.component.css']
})
export class BugReportDialogComponent implements OnInit {

  private bugReport: BugReport;

  constructor(
    @Inject('APP_NAME') appName: string,
    @Inject('APP_VERSION') appVersion: string,
    @Inject('APP_REPOSITORY') appRepository: string,
    @Inject(MAT_DIALOG_DATA) bug: Error,
    private gitHubService: GitHubService,
    private dialogRef: MatDialogRef<BugReportDialogComponent>
  ) {

    if (bug instanceof Error) {

      this.bugReport = { // stand: titel einführen
        internalText: bug.message + `\n\n` + bug.stack.toString()
      }

    } else {

      this.bugReport = bug;
    }

    this.bugReport.product = this.bugReport.product ?? appName;
    this.bugReport.version = this.bugReport.version ?? appVersion;
    this.bugReport.repository = this.bugReport.repository ?? appRepository;
    this.bugReport.date = this.bugReport.date ?? Date.now();
    this.bugReport.server = this.bugReport.server ?? window.location.href;

    this.bugReport.comment = this.bugReport.comment ??
        "## Was haben Sie gemacht\n## Was sollte passieren?\n## Was ist stattdessen passiert?";

  }

  ngOnInit() {

  }

  submitIssue() {

    const errorBody = `#Error Report\n`
      + `product: \`${this.bugReport.product}\` in version : \`${this.bugReport.version}\`\n`
      + `server: -- \n`
      + `date: \`${this.bugReport.date}\`\n`
      + `\nreported by: \`${this.bugReport.reporterName}&lt;${this.bugReport.reporterEmail}&gt;\n`
      + (this.bugReport.errorIdentifier ? `error-id: \`${this.bugReport.errorIdentifier}\`\n` : '')
      + `\n# Description\n${this.bugReport.comment}\n`
      + `\n# Error Info:\n\`\`\`\n${this.bugReport.internalText}\`\`\`\n`

    const repo = {
      owner: 'paflov',
      name: 'demo',
      url: '123'
    }

    const issue = {
      title: 'auto issue',
      body: errorBody,
      labels: ['BugReport']
    }

    this.gitHubService.publishIssue(repo, issue)
        .subscribe((issueUrl: string|null) => {
            console.log({issueUrl});
            this.dialogRef.close(issueUrl);
        });
  }
}
