import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoArr :Array<Itodo> = [
   {
    todoItem : 'JavaScript'
   }
  ]
  constructor() { }

   @ViewChild('get')getdata !: ElementRef;

  ngOnInit(): void  {
    let storData = localStorage.getItem('get')
    if(storData)
    {
       this.todoArr = JSON.parse(storData);
    }
       
  }
  

  addB()
  {
     let newObj : Itodo = {
       todoItem : this.getdata.nativeElement.value
      }
      this.todoArr.push(newObj)
      localStorage.setItem('get',JSON.stringify(this.todoArr))

    }
      
      
      
      
      
   
  // addB(get : HTMLInputElement)
  // {
  //   let newObj :Itodo = {
  //     todoItem: get.value,
  //   }
  //     get.value = '';
  //     this.todoArr.push(newObj)
  //     localStorage.setItem('getObj',JSON.stringify(this.todoArr))
  //   }
}
