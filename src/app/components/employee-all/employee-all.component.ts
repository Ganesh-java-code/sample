import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent implements OnInit {

  employees: Employee[] = [];
  message: string = '';

  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.fetchAllEmployees()
  }

  //call service method to fetch data..
  fetchAllEmployees(){
    this.service.fetchAllEmployees().subscribe((data)=>{
      this.employees=data
    },(error)=>{
      console.log(error)
    })
  }

}
