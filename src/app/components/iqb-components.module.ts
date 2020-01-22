import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialogs/confirm/confirm-dialog.component';
import { MessageDialogComponent } from './dialogs/message/message-dialog.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { ServerError, ErrorHandler } from './iqb-components.classes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    MessageDialogComponent
  ],
  declarations: [
    ConfirmDialogComponent,
    MessageDialogComponent,
    BytesPipe
  ],
  exports: [
    ConfirmDialogComponent,
    MessageDialogComponent,
    BytesPipe,
    ServerError,
    ErrorHandler
  ]
})
export class IqbComponents { }
