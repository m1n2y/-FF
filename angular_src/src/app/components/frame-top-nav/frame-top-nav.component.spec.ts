import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTopNavComponent } from './frame-top-nav.component';

describe('FrameTopNavComponent', () => {
  let component: FrameTopNavComponent;
  let fixture: ComponentFixture<FrameTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
