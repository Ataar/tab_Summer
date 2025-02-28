import { Component } from '@angular/core';
import { EmployeData } from './shared/models/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Do You Know Angular's Components?";
     


   employees : Array<EmployeData>= [
    {
      employeeId: "EMP1001",
      name: "Robert Wilson",
      position: "Software Engineer",
      department: "IT",
      salary: 75000,
      hireDate: "2022-06-15"
    },
    {
      employeeId: "EMP1002",
      name: "Jessica Brown",
      position: "HR Manager",
      department: "Human Resources",
      salary: 65000,
      hireDate: "2021-09-10"
    },
    {
      employeeId: "EMP1003",
      name: "Daniel Martinez",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 58000,
      hireDate: "2023-01-20"
    },
    {
      employeeId: "EMP1004",
      name: "Laura Smith",
      position: "Data Analyst",
      department: "Analytics",
      salary: 70000,
      hireDate: "2020-12-05"
    }
  ];


  
flightBookingsTables = [
  [
      { passengerName: 'Alice', flightNumber: 'A101', destination: 'New York' },
      { passengerName: 'Bob', flightNumber: 'B202', destination: 'London' },
      { passengerName: 'Putin', flightNumber: 'T92v', destination: 'Russia' }
  ],

  [
      { passengerName: 'Charlie', flightNumber: 'C303', destination: 'Tokyo' },
      { passengerName: 'Haris', flightNumber: 'D404', destination: 'Paris' },
      { passengerName: 'Harry', flightNumber: 'ZeOp', destination: 'Taiwan' }
  ],

  [
    { passengerName: 'Charlie', flightNumber: 'C303', destination: 'Mosco' },
    { passengerName: 'Kaya', flightNumber: 'JKr34', destination: 'German' },
    { passengerName: 'David', flightNumber: 'GT45', destination: 'Afgan' }
], 

[
  { passengerName: 'Charlie', flightNumber: 'C303', destination: 'Mosco' },
  { passengerName: 'Kaya', flightNumber: 'JKr34', destination: 'German' },
  { passengerName: 'David', flightNumber: 'GT45', destination: 'Afgan' }
],


[
  { passengerName: 'Charlie', flightNumber: 'C303', destination: 'Mosco' },
  { passengerName: 'Kaya', flightNumber: 'JKr34', destination: 'German' },
  { passengerName: 'David', flightNumber: 'GT45', destination: 'Afgan' }
], 

[
  { passengerName: 'Charlie', flightNumber: 'C303', destination: 'Mosco' },
  { passengerName: 'Kaya', flightNumber: 'JKr34', destination: 'German' },
  { passengerName: 'David', flightNumber: 'GT45', destination: 'Afgan' }
]


]

}
    
  // we have array so we will have to craete interFace of this array.
  


 
