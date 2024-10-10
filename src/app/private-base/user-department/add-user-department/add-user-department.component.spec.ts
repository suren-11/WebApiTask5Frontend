import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDepartmentComponent } from './add-user-department.component';

describe('AddUserDepartmentComponent', () => {
  let component: AddUserDepartmentComponent;
  let fixture: ComponentFixture<AddUserDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
