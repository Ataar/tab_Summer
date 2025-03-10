import { Component, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  stdTable : Array<Istudent> = [

    {
       fname:'Rohan',
       email:'Rohan@gmail.com',
       phone:9876453653
    }
  ]

  constructor() { }



  ngOnInit(): void {

    let stdData = localStorage.getItem('getObj')
    if(stdData)
    {
       this.stdTable = JSON.parse(stdData)
    }
  }
  
    onClick(
      
      nameControl:HTMLInputElement,
      emailControl:HTMLInputElement,
      phoneControl:HTMLInputElement)
    {
       let stdObj : Istudent = 
       {
        fname:nameControl.value,
        email:emailControl.value,
        phone:+phoneControl.value
       }
       console.log(stdObj)
        nameControl.value = '';
        emailControl.value = '';
        phoneControl.value = '';
       

      this.stdTable.push(stdObj)
      localStorage.setItem('getObj',JSON.stringify(this.stdTable))
    }

    

}
