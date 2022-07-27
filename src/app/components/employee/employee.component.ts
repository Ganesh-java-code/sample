
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:Employee = new Employee(0,"",0.0)
  msg:String=""

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {

  }

  createEmployee(){
    this.service.SaveData(this.employee).subscribe(data=>{
      this.msg=data
      this.employee=data
    },error=>{
        console.log(error);
      this.msg = 'Unable to save! Contact Admin';
    })
  }

}
