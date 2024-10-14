import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ]
})
export class DatePickerComponent {

  @Input() selectedDate!: Date;
  @Output() selectedDateChange = new EventEmitter<Date>();

  day: number | null = null;
  month: number | null = null;
  year: number | null = null;

  onChange: (date: Date) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit() {
    if (this.selectedDate) {
      this.setDate(this.selectedDate);
    }
  }

  setDate(date: Date) {
    if (date) {
      this.day = date.getDate();
      this.month = date.getMonth() + 1;
      this.year = date.getFullYear();
    }
  }

  writeValue(date: Date): void {
    this.setDate(date);
  }

  registerOnChange(fn: (date: Date) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onDateChange(): void {
    if (this.day && this.month && this.year) {
      const selectedDate = new Date(this.year, this.month - 1, this.day);
      this.onChange(selectedDate);
      this.onTouched();
      this.selectedDateChange.emit(selectedDate);
    }
  }
}
