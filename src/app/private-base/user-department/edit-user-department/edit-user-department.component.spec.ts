import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDepartmentComponent } from './edit-user-department.component';

describe('EditUserDepartmentComponent', () => {
  let component: EditUserDepartmentComponent;
  let fixture: ComponentFixture<EditUserDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
