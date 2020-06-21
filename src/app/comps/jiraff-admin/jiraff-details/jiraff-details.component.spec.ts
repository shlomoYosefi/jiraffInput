import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffDetailsComponent } from './jiraff-details.component';

describe('JiraffDetailsComponent', () => {
  let component: JiraffDetailsComponent;
  let fixture: ComponentFixture<JiraffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
