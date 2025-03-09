

import { Component } from "@angular/core";


// Decorator is a function that adds metadata to a class, its members, or its method arguments.
// The decorator @Component is a function that adds metadata to the ProductComponent class.
 @Component({   // if we wnat to decorate class so we use @Component. 
   selector: 'app-product',  // selector is a property of @Component.
   templateUrl:'./product.component.html',  // templateUrl is a property of @Component.
    styleUrls: ['./product.component.scss']  // styleUrls is a property of @Component.
})

export class ProductComponent  // it is typeScript class so we have to convert into component means is to decorate the class.  
{
    
  product_name:string = 'Moto Edge 60 Ultra 2025';  // string interpolation.
  product_price:string = '₹70000';


  product_name1:string = 'Buttermilk';          // property binding.
  product_price1:string = '₹100';


  product_name2:string = 'Apple Juice';       // property binding.
  product_price2:string = '₹50';
get formattedProduct(): string {
  return `${this.product_name2}  ${this.product_price2}`;
}
 
response: string = `<strong><span>This is a response from the server</span></strong>`;
  






//  event binding

 onKeyUp(eve:Event)
 {
    let val = (eve.target as HTMLInputElement).value;
    console.log(val);
  }


 //  event binding 
 onClick(getPro : HTMLInputElement)

 {
    console.log(getPro.value);
 }
}




// Notes:-


// 1 - eve.target represents the HTML element that triggered the event—in this case, the <input> field.

// 2 - here HTMLInputElement is a built in interface that is used to access the value property of the input element.
// and it provides access to the properties and methods specific to <input> elements. 

//  3 - eve.traget does not know about the value property of the input element so using HTMLInputElement we can access the value property of the input element.    

















