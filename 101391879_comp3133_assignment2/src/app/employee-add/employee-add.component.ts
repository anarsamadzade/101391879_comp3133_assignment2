import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    const newEmployee = { id: 0, firstName: this.firstName, lastName: this.lastName, email: this.email };
    this.employeeService.addEmployee(newEmployee).subscribe(() => {
      alert('Employee added successfully');
    });
  }
}
