import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  dataSource:any;


  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.employees);

  }

  employees=[
    {empid:1,name:"ironman",age:52,salary:"$80000"},
    {empid:2,name:"batman",age:48,salary:"$30000"},
    {empid:3,name:"superman",age:50,salary:"$20000"},
    {empid:4,name:"harly quinn",age:29,salary:"$60000"},
];

employeesColumnNames=["empid","name","age","salary"];

}
