import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {

  dateForm: FormGroup;

  @Input() selectedDate! :string;

  @Output() selectedDateChange = new EventEmitter<string>();

  errorMessage: boolean  = false;
  
  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      day: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(12)]],
      year: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    });
  }

  onDateChange(): void {
    if (this.dateForm.valid) {
      this.selectedDate = `${this.dateForm.get('day')?.value}-${this.dateForm.get('month')?.value}-${this.dateForm.get('year')?.value}`;
      const parsedDate = this.formatDate(this.selectedDate);
      

      if (parsedDate) {
        this.errorMessage = false;
        this.selectedDateChange.emit(this.selectedDate);
      } else {
        this.errorMessage = true;
      }
    } else {
      this.errorMessage = true;
    }
  }

  formatDate(date: string) {
    if (!date) return false;

    const [day, month, year] = date.split('-').map(Number);
    
    const parsedDate = new Date(year, month - 1, day);

    if (parsedDate && parsedDate.getDate() === day && parsedDate.getMonth() === month - 1 && parsedDate.getFullYear() === year) {
      return true;
    }

    return false; 
  }

}
