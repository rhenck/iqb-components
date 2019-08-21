import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './components/dialogs/confirm/confirm-dialog.component';
import { MessageDialogComponent } from './components/dialogs/message/message-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Showcase {

  constructor(public dialog: MatDialog) {}
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
}
