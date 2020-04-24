import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BugReport } from './bug-report.class';
import { Component, OnInit, Inject } from '@angular/core';
import {BugReportDialogData, BugReportTargetService} from './bug-report.interfaces';

@Component({
  templateUrl: './bug-report-dialog.component.html',
  styleUrls: ['./bug-report-dialog.component.css']
})
export class BugReportDialogComponent implements OnInit {

  private bugReport: BugReport;
  private targetService: BugReportTargetService;
  private targetKey: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) dialogData: BugReportDialogData,
    private dialogRef: MatDialogRef<BugReportDialogComponent>
  ) {

      this.bugReport = dialogData.report;
      this.targetService = dialogData.targetService;
      this.targetKey = dialogData.targetKey;
  }

  ngOnInit() {

  }

  submitIssue() {

    this.targetService.publishIssue(this.bugReport, this.targetKey)
        .subscribe((issueUrl: string|null) => {
            console.log({issueUrl});
            this.dialogRef.close(issueUrl);
        });
  }
}
