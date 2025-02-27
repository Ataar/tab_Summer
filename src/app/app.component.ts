import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to the World of Angular';
  fruits: Array<string> = [
    "Banana - High in Vitamin B6 and C",
    "Strawberry - Packed with Vitamin C and K",
    "Apple - Contains Vitamin C and B-complex",
    "Mango - Loaded with Vitamin A and C",
    "Blueberry - Full of Vitamin C and K",
    "Watermelon - Provides Vitamin A and C"
  ];


    landmarks: Array<string> = [
      "Eiffel Tower - Located in Paris, France",
      "Great Wall - Found in China and Asia",
      "Statue of Liberty - Stands in New York, USA",
      "Colosseum - Located in Rome, Italy",
      "Taj Mahal - Found in Agra, India",
      "Pyramids of Giza - Located in Egypt, Africa",
    ];

      planets: Array<string> = [
        "Mercury - Smallest and Closest to Sun",
        "Venus - Hottest Planet with Thick Atmosphere",
        "Earth - Supports Life and Has Water",
        "Mars - Known as the Red Planet",
        "Jupiter - Largest Planet with Great Red Spot",
        "Saturn - Famous for Its Stunning Rings"
        
      ];


     
        languages: Array<string> = [
          "JavaScript - Used for Web Development",
          "Python - Popular in AI and Data Science",
          "Java - Common in Enterprise Applications",
          "C++ - Powerful for Game Development",
          "Swift - Essential for iOS Applications",
          "Kotlin - Official Language for Android"
          
        ];
   
      

   
      
          scientists: Array<string> = [
            "Albert Einstein - Theory of Relativity",
            "Isaac Newton - Laws of Motion and Gravity",
            "Marie Curie - Discovered Radium and Polonium",
            "Nikola Tesla - Innovated Electrical Power",
            "Galileo Galilei - Father of Modern Astronomy",
            "Charles Darwin - Theory of Evolution"
          ];
    
        
            sports: Array<string> = [
              "Soccer - FIFA World Cup and UEFA Champions",
              "Basketball - NBA Finals and Olympic Games",
              "Cricket - ICC World Cup and T20 Leagues",
              "Tennis - Wimbledon and US Open",
              "Formula 1 - Monaco Grand Prix and Championships",
              "Golf - The Masters and Ryder Cup"
             
            ];

             
    
            
          

    }
    
  
  


 
