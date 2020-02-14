import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialogs/confirm/confirm-dialog.component';
import { MessageDialogComponent } from './dialogs/message/message-dialog.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { CustomtextPipe } from './customtext/customtext.pipe';
import { CustomtextService } from './customtext/customtext.service';
import { ErrorHandler, IqbComponentsConfig, ServerError } from './iqb-components.classes';
import { CustomTextData, CustomTextDefs } from './customtext/customtext.interfaces';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
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
  exports: [
    ConfirmDialogComponent,
    MessageDialogComponent,
    BytesPipe,
    CustomtextPipe
  ]
})
export class IqbComponentsModule {
  // if config is needed: static forRoot(config: IqbComponentsConfig): ModuleWithProviders {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IqbComponentsModule,
      providers: [
        {provide: IqbComponentsConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: IqbComponentsModule
    };
  }

}
export {ConfirmDialogComponent, MessageDialogComponent, ServerError, ErrorHandler,
  CustomTextData, CustomTextDefs, BytesPipe, CustomtextPipe, CustomtextService}; // IqbComponentsConfig
