import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponent } from './lazy.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatRippleModule
} from '@angular/material';
import { IqbComponentsModule } from '../components/iqb-components.module';
import { FormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LazyComponent', () => {
  let component: LazyComponent;
  let fixture: ComponentFixture<LazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ObserversModule,
        RouterTestingModule.withRoutes([]),
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        IqbComponentsModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        LazyComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<LazyComponent>(LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
