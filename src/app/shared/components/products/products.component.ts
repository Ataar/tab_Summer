import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit
{
    // Property binding
    isDisabled: boolean = true;
    productImg: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLn5reWRgbF_8Et4qBAtE60bLmFcvwAElMw&s';
     ngOnInit(): void { 
        
        //  ngOnInit() is called when a component is initialized
        setTimeout(() => {
            this.isDisabled = false;
        },2500);
     }
}

