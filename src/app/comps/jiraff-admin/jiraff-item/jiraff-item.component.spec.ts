import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffItemComponent } from './jiraff-item.component';

describe('JiraffItemComponent', () => {
  let component: JiraffItemComponent;
  let fixture: ComponentFixture<JiraffItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
