import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SalaryResponse } from '../../models/salary-response.model';
import { SalaryCalculationService } from '../../services/salary-calculation.service';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SalaryCalculatorComponent {
  employeeForm: FormGroup;
  salary: SalaryResponse | null = null;

  constructor(private fb: FormBuilder, private salaryService: SalaryCalculationService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyWage: ['', [Validators.required, Validators.min(0)]],
      hoursWorked: ['', [Validators.required, Validators.min(0)]],
      overtimeHours: ['', [Validators.required, Validators.min(0)]]
    });
  }

  controlHasError(control: string, error: string) {
    return this.employeeForm.controls[control].hasError(error);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.salary = this.salaryService.calculateSalary(this.employeeForm.value);
    }
  }
}
