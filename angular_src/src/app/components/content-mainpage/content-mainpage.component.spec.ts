import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMainpageComponent } from './content-mainpage.component';

describe('ContentMainpageComponent', () => {
  let component: ContentMainpageComponent;
  let fixture: ComponentFixture<ContentMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
