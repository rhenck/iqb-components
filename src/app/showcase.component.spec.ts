import { TestBed, async } from '@angular/core/testing';
import { Showcase } from './showcase.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Showcase
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Showcase);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iqb-components'`, () => {
    const fixture = TestBed.createComponent(Showcase);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('iqb-components');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Showcase);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to iqb-components!');
  });
});
