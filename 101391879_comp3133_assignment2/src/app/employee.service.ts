import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/graphql';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.post(this.baseUrl, {
      query: `query { employees { id, firstName, lastName, email } }`,
    });
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.baseUrl, {
      query: `
        mutation {
          addEmployee(firstName: "${employee.firstName}", lastName: "${employee.lastName}", email: "${employee.email}") {
            id
          }
        }
      `,
    });
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.post(this.baseUrl, {
      query: `
        mutation {
          deleteEmployee(id: "${id}") {
            id
          }
        }
      `,
    });
  }
}
