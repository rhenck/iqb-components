import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BugReport } from './bug-report.class';
import { Component, OnInit, Inject } from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  templateUrl: './bug-report-dialog.component.html',
  styleUrls: ['./bug-report-dialog.component.css']
})
export class BugReportDialogComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) private bugReport: BugReport,
    private gitHubService: GitHubService,
    private dialogRef: MatDialogRef<BugReportDialogComponent>
  ) {

  }

  ngOnInit() {

  }

  submitIssue() {

    this.gitHubService.publishIssue({
      title: this.bugReport.title,
      body: this.bugReport.totext(),
      labels: ['BugReport']
    }, this.bugReport.repository)
        .subscribe((issueUrl: string|null) => {
            console.log({issueUrl});
            this.dialogRef.close(issueUrl);
        });
  }



}
