import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffPageComponent } from './jiraff-page.component';

describe('JiraffPageComponent', () => {
  let component: JiraffPageComponent;
  let fixture: ComponentFixture<JiraffPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
