import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BugReportDialogComponent } from './bug-report-dialog.component';
import {MatDialogClose, MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BugReportResult, BugReportTargetService} from './bug-report.interfaces';
import {Observable, of} from 'rxjs';

describe('BugReportDialogComponent', () => {

  let fixture;
  let component: BugReportDialogComponent;

  class MockBugReportTargetService implements BugReportTargetService {

    getTargetName(targetKey: string): string {
      return 'target of: ' + targetKey;
    }

    publishIssue(): Observable<BugReportResult> {

      return of({
        success: true,
        message: "ok"
      });
    }

    targets: {
      'a_key': { }
    };
  }

  class MockMatDialogRef {

    private dialogOutcome: string;

    afterClosed() {
      return of(this.dialogOutcome);
    }

    close(dialogOutcome: string) {
      this.dialogOutcome = dialogOutcome;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BugReportDialogComponent,
        MatDialogClose
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            report: {
              devInfo: "xxx",
              title: "title"
            },
            targetService: new MockBugReportTargetService(),
            targetKey: 'a_key',
            config: {
              hideFields: ['title']
            }
          }
        },
        {
          provide: MatDialogRef,
          useValue: new MockMatDialogRef()
        },
        {
          provide: MatDialog,
          useValue: 'browser'
        },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(BugReportDialogComponent);
    component = fixture.debugElement.componentInstance;
  });


  it('should create a component', async () => {

    expect(component).toBeTruthy();
  });


  it('should extract provided data correctly', async () => {

    component.targetName = 'target of: a_key';
    component.config = {
      hideFields: ['title']
    };
  });


  it('submit on button click', async () => {

    component.submitIssue();
    component.dialogRef.afterClosed().subscribe(result => {
      expect(result).toEqual({
        success: true,
        message: "ok"
      });
    });
  });
});
