import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
    BugReport,
    BugReportDialogConfig,
    BugReportDialogData,
    BugReportResult,
    BugReportTargetService,
} from '../bug-report.interfaces';
import {BugReportService} from '../bug-report.service';

@Component({
  templateUrl: './bug-report-dialog.component.html',
  styleUrls: ['./bug-report-dialog.component.css']
})
export class BugReportDialogComponent {

  private bugReport: BugReport;
  private targetService: BugReportTargetService;
  private targetKey: string;

  public config: BugReportDialogConfig;

  public fullReportPanelOpen: boolean;
  public targetName: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) dialogData: BugReportDialogData,
    public dialogRef: MatDialogRef<BugReportDialogComponent>,
    private bugReportService: BugReportService
  ) {

      this.bugReport = (typeof dialogData.report === "undefined")
          ? this.bugReportService.create({devInfo: "[unknown error]"})
          : dialogData.report;

      this.targetService = (typeof dialogData.targetService === "undefined")
          ? null
          : dialogData.targetService;

      this.targetKey=  (typeof dialogData.targetKey === "undefined")
          ? ""
          : dialogData.targetKey;

      this.config = (typeof dialogData.targetService === "undefined")
          ? {hideFields: ["title"]}
          : dialogData.config;

      this.fullReportPanelOpen = false;
      this.targetName = this.targetService.getTargetName(dialogData.targetKey);
  }

  submitIssue() {

    this.targetService.publishIssue(this.bugReport, this.targetKey)
        .subscribe((bugReportResult: BugReportResult) => {
            console.log(bugReportResult);
            this.dialogRef.close(bugReportResult);
        });
  }

  getReportAsText(): string {

      return this.bugReportService.toText(this.bugReport)
  }
}
