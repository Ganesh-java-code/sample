import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Uri = `${environment.baseUri}/employeeKF` 
  
  constructor(private http: HttpClient) {}

  SaveData(employee:Employee):Observable<any>{
    return this.http.post(`${this.Uri}/send`,employee,{
      responseType:'text'
    })
  }

  //2. fetch all
  fetchAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.Uri}/all`);
  }

}
