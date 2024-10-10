import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserDepartmentComponent } from './show-user-department.component';

describe('ShowUserDepartmentComponent', () => {
  let component: ShowUserDepartmentComponent;
  let fixture: ComponentFixture<ShowUserDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowUserDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUserDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
