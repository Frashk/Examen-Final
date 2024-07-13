import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';
import { SalaryCalculationService } from './services/salary-calculation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaryCalculatorComponent],
  providers:[SalaryCalculationService],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
}
