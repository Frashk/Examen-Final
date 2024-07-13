import { Injectable } from '@angular/core';
import { EmployeeRequest } from '../models/employee-request.model';
import { SalaryResponse } from '../models/salary-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  calculateSalary(employee: EmployeeRequest): SalaryResponse {
    const regularSalary = employee.hoursWorked * employee.hourlyWage;
    const overtimeSalary = employee.overtimeHours * employee.hourlyWage * 1.5;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
