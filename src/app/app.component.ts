import { Component } from '@angular/core';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { from } from 'rxjs';
import { BytesPipe } from './components/pipes/bytes.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
    type: 1,
    title: 'Message',
    content: 'This is some nice Dialogue',
    closebuttonlabel: 'Screw it'
  };

  messageDialogResult: any;

  pipeBytesValue = '1, 100, 10000, 100000, 1000000, 10000000, 100000000, 10000000000000000';

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: 'auto',
      data: this.confirmDialogData
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


  applyPipeBytes() {
    return this.pipeBytesValue
        .split(',')
        .map(item => parseInt(item));


  }
}
