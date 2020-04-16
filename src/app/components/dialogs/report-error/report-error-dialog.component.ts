import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


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
  ) {

    this.errorData.product = this.errorData.product ?? appName;
    this.errorData.version = this.errorData.version ?? appVersion;
    this.errorData.repository = this.errorData.repository ?? appRepository;

    this.errorData.comment = this.errorData.comment ??
        "# Was haben Sie gemacht\n# Was sollte passieren?\n# Was ist stattdessen passiert?";
  }

  ngOnInit() {

  }
}

export interface ReportableErrorData {
  internalText: string;
  errorIdentifier?: string;
  comment?: string;
  reporterName?: string;
  reporterEmail?: string;
  date?: number;
  product?: string;
  version?: string;
  repository?: string;
}
