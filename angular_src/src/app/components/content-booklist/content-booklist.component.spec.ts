import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBooklistComponent } from './content-booklist.component';

describe('ContentBooklistComponent', () => {
  let component: ContentBooklistComponent;
  let fixture: ComponentFixture<ContentBooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
