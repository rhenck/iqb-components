import { Component } from '@angular/core';
import {ShowcaseService} from './showcase.service';
import {
  ConfirmDialogComponent,
  CustomtextService,
  MessageDialogComponent,
  ServerError,
  BugReportComponent,
  BugReport
} from './components/iqb-components.module';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Showcase {

  constructor(
      public dialog: MatDialog,
      private scs: ShowcaseService,
      private router: Router,
      public cts: CustomtextService
  ) {}

  title = 'iqb-components';

  confirmDialogData = {
    title: 'Please confirm',
    content: 'this action must be confirmed',
    confirmbuttonlabel: 'Yes, do it!',
    showcancel: true,
  };

  confirmDialogResult: any;

  messageDialogData = {
    type: 2,
    title: 'Message',
    content: 'This is some nice Dialogue',
    closebuttonlabel: 'Screw it'
  };

  messageDialogResult: any;

  reportErrorDialogData: BugReport = {
    errorIdentifier: '#1337',
    reporterName: 'paf@iqb.de',
    internalText: 'error in line 135',
    repository: "xxx"
  }

  reportErrorDialogResult: any;


  pipeBytesValue = '1, 100, 10000, 100000, 1000000, 10000000, 100000000, 10000000000000000';

  httpErrorData = {
    url: 'http://walhalla.et',
    parameterName: 'Name',
    parameterValue: 'Tarantino'
  };

  httpResponse = {
    errorCode: 0,
    messageShort: '-',
    messageLong: '-'
  };

  customTextValues = {
    ctv1: '',
    ctv2: '',
  };

  openConfirmDialog(): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: 'auto',
      data: Object.assign({}, this.confirmDialogData)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with:', result);
      this.confirmDialogResult = result;
    });
  }

  openMessageDialog(): void {

    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: 'auto',
      data: Object.assign({}, this.messageDialogData),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with:', result);
      this.confirmDialogResult = result;
    });
  }


  openBugReportDialog(): void {

    const dialogRef = this.dialog.open(BugReportComponent, {
      width: 'auto',
      data: Object.assign({}, this.reportErrorDialogData),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with:', result);
      this.reportErrorDialogResult = result;
    });
  }


  applyPipeBytes() {

    return this.pipeBytesValue
        .split(',')
        .map(item => parseInt(item, 10));
  }


  demoHttpError() {

    this.scs.checkError(
        this.httpErrorData.url,
        this.httpErrorData.parameterName,
        this.httpErrorData.parameterValue
    ).subscribe(responseData => {
      if (responseData instanceof ServerError) {
        this.httpResponse.errorCode = (responseData as ServerError).code;
        this.httpResponse.messageShort = (responseData as ServerError).labelNice;
        this.httpResponse.messageLong = (responseData as ServerError).labelSystem;
      } else {
        this.httpResponse.errorCode = 0;
        this.httpResponse.messageShort = 'valid serverresponse';
        this.httpResponse.messageLong = (responseData as string);
      }
    });
  }

  applyCustomTexts() {
    const myCustomTexts: {[key: string]: string} = {};
    myCustomTexts.ctv1 = this.customTextValues.ctv1;
    myCustomTexts.ctv2 = this.customTextValues.ctv2;
    this.cts.addCustomTexts(myCustomTexts);
  }
  goToLazy() {
    this.router.navigateByUrl('/lazy');
  }
}
