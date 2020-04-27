import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
    BugReport,
    BugReportDialogConfig,
    BugReportDialogData,
    BugReportResult,
    BugReportTargetService,
} from './bug-report.interfaces';
import {BugReportService} from './bug-report.service';

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

      this.bugReport = dialogData.report;
      this.targetService = dialogData.targetService;
      this.targetKey = dialogData.targetKey;
      this.config = dialogData.config ?? {hideFields: ["title"]};

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
