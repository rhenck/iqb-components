import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportableErrorData } from './report-error.interfaces';
import { Component, OnInit, Inject } from '@angular/core';
import { GitHubService } from './connect-github.service';

@Component({
  templateUrl: './report-error-dialog.component.html',
  styleUrls: ['./report-error-dialog.component.css']
})
export class ReportErrorDialogComponent implements OnInit {

  constructor(
    @Inject('APP_NAME') appName: string,
    @Inject('APP_VERSION') appVersion: string,
    @Inject('APP_REPOSITORY') appRepository: string,
    @Inject(MAT_DIALOG_DATA) private errorData: ReportableErrorData,
    private gitHubService: GitHubService,
  ) {

    this.errorData.product = this.errorData.product ?? appName;
    this.errorData.version = this.errorData.version ?? appVersion;
    this.errorData.repository = this.errorData.repository ?? appRepository;

    this.errorData.comment = this.errorData.comment ??
        "## Was haben Sie gemacht\n## Was sollte passieren?\n## Was ist stattdessen passiert?";
  }

  ngOnInit() {

  }

  submitIssue() {

    const errorBody = `#Error Report\n`
      + `product: \`${this.errorData.product}\` in version : \`${this.errorData.version}\`\n`
      + `server: -- \n`
      + `date: \`${this.errorData.date}\`\n`
      + `\nreported by \`${this.errorData.reporterName}&lt;${this.errorData.reporterEmail}&gt;\n`
      + (this.errorData.errorIdentifier ? `error-id: \`${this.errorData.errorIdentifier}\`\n` : '')
      + `\n# Description\n${this.errorData.comment}\n`
      + `\n# Error Info:\n\`\`\`\n${this.errorData.internalText}\`\`\`\n`

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
        });
  }
}
