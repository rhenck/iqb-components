import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialogs/confirm/confirm-dialog.component';
import { MessageDialogComponent } from './dialogs/message/message-dialog.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { CustomtextPipe } from './customise/customtext.pipe';
import {CustomtextService} from "./customise/customtext.service";
import {ErrorHandler, ServerError} from "./iqb-components.classes";
import {CustomTextData, CustomTextDefs} from "./customise/customtext.interfaces";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
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
  CustomTextData, CustomTextDefs, BytesPipe, CustomtextPipe, CustomtextService}
