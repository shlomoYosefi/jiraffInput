import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffLableComponent } from './jiraff-lable.component';

describe('JiraffLableComponent', () => {
  let component: JiraffLableComponent;
  let fixture: ComponentFixture<JiraffLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
