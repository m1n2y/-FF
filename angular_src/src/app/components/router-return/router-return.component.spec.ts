import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterReturnComponent } from './router-return.component';

describe('RouterReturnComponent', () => {
  let component: RouterReturnComponent;
  let fixture: ComponentFixture<RouterReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
