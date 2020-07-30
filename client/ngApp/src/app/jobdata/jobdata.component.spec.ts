import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdataComponent } from './jobdata.component';

describe('JobdataComponent', () => {
  let component: JobdataComponent;
  let fixture: ComponentFixture<JobdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
