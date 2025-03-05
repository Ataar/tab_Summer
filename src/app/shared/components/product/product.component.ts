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
    products = [
        {
          name: 'Moto Edge 60 Ultra 2025',
          price: '₹70000',
          image: 'https://udaipurkiran.in/wp-content/uploads/2024/10/Moto-Edge-60-Ultra-2025.jpg',
          details: 'Moto Edge 60 Ultra 2025 is a new smartphone by Motorola, and Edge 60 Ultra 2025 price is $70000, on this page you can find the best and most updated price of Edge 60 Ultra 2025 with detailed specifications and features.'
        },
        {
          name: 'Buttermilk',
          price: '₹100',
          image: 'https://i.ndtvimg.com/i/2015-06/buttermilk-taste-test_625x350_51434087071.jpg',
          details: 'Buttermilk is a fermented dairy drink. Traditionally, it was the liquid left behind after churning butter out of cultured cream. Today, most buttermilk is cultured. It is common in warm climates where unrefrigerated fresh milk sours quickly.'
        },
        {
          name: 'Lemon Juice',
          price: '₹ 300',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspa4OzWiTAEJSPttYwQn1lPFrPZ-XBEVrSw&s',
          details: 'Lemon juice is a popular ingredient in cooking and baking and may be used as a substitute for vinegar. Lemon juice is extracted from fresh lemons and used in cooking and baking. Besides its culinary uses, lemon juice has various health benefits associated with it.'
        },
        {
            name: 'prettiest cities',
            price: '',
            image: 'https://media.travelbag.co.uk/media/izsivlpn/dubai-skyline-at-night.jpg?rxy=0.5,0.5&rmode=Crop&quality=80&width=1080&height=1080&format=webp',
            details: 'Lemon juice is a popular ingredient in cooking and baking and may be used as a substitute for vinegar. Lemon juice is extracted from fresh lemons and used in cooking and baking. Besides its culinary uses, lemon juice has various health benefits associated with it.'
          },
          {
            name: 'Indian Dosa Recipe',
            price: '₹80',
            image: 'https://images.alphacoders.com/862/thumb-1920-862639.jpg',
            details: 'The masala dosa finds its origins in the Tuluva Mangalorean cuisine of Karnataka. This dish combines a regular dosa with a lightly spiced potato filling that is cooked with green chillies and the South Indian star- curry leaves.'
          },
          {
            name: 'Green park',
            price: '',
            image: 'https://static.toiimg.com/thumb/msid-86485225,width-748,height-499,resizemode=4,imgsize-208364/Beautiful-green-parks-to-visit-in-Udaipur.jpg',
            details: 'Udaipur is not just the city of lakes but is also the city of parks! The city has a number of green spaces which are as famous as any palaces and forts in Rajasthan. These parks are Udaipur heritage, and are noted for offering tremendous sunsets and sunrise views. These spaces are every nature lover’s dream and are best suited for family outings.'
          }
      ];
      
}