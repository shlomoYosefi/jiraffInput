import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffAdminComponent } from './jiraff-admin.component';

describe('JiraffAdminComponent', () => {
  let component: JiraffAdminComponent;
  let fixture: ComponentFixture<JiraffAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
