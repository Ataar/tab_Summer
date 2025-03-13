import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsModule } from '@angular/forms';
import { TabNgifComponent } from './tab-ngif/tab-ngif.component';
import { TabNgifForComponent } from './shared/components/tab-ngif-for/tab-ngif-for.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TabNgifComponent,
    TabNgifForComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
