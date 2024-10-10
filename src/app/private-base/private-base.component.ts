import { Component } from '@angular/core';

@Component({
  selector: 'app-private-base',
  templateUrl: './private-base.component.html',
  styleUrl: './private-base.component.css'
})
export class PrivateBaseComponent {
 
isStudentDropdownOpen = false;
isCourseDropdownOpen = false;
isMyTestingDropdownOpen = false;


}
