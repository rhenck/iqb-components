import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './components/dialogs/confirm/confirm-dialog.component';
import { MessageDialogComponent } from './components/dialogs/message/message-dialog.component';
import {ShowcaseService} from './showcase.service';
import {ServerError} from './components/iqb-components.classes';

@Component({
  selector: 'app-root',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Showcase {

  constructor(
      public dialog: MatDialog,
      private scs: ShowcaseService
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
    console.log(this.messageDialogData);
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: 'auto',
      data: Object.assign({}, this.messageDialogData),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with:', result);
      this.confirmDialogResult = result;
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
}
