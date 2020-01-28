import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmDialogComponent } from './dialogs/confirm/confirm-dialog.component';
import { MessageDialogComponent } from './dialogs/message/message-dialog.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { CustomtextPipe } from './customise/customtext.pipe';
import {CustomtextService} from "./customise/customtext.service";
import {ErrorHandler, ServerError} from "./iqb-components.classes";

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
    BytesPipe,
    CustomtextPipe
  ],
  providers: [
    CustomtextService
  ],
  exports: [
    ConfirmDialogComponent,
    MessageDialogComponent,
    BytesPipe,
    CustomtextPipe
  ]
})
export class IqbComponentsModule { }
export {ConfirmDialogComponent, MessageDialogComponent, ServerError, ErrorHandler,
  BytesPipe, CustomtextPipe, CustomtextService}
