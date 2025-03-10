

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { __values } from "tslib";


 @Component({   
   selector: 'app-product',  
   templateUrl:'./product.component.html',  
    styleUrls: ['./product.component.scss']  
 })
export class ProductComponent implements OnInit {


   @ViewChild('getData')get !: ElementRef;
   
   ngOnInit(): void {
    
   }

onClick()
   
{
   let val:string = this.get.nativeElement.value;
   console.log(val)

   this.get.nativeElement.value = '';
  
}
  //  onClick(get : HTMLInputElement)
  //  {
  //     let val = get.value;
  //     console.log(val)
  //  }
}





















