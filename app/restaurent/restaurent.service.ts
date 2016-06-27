import { Injectable } from '@angular/core';


@Injectable()
export class RestaurentService {

    constructor() { }

    getRestaurent(){
      return [
          {
          "id" : 1,
        "name" : "California Pizza Kitchen",
         "type" : "American, Pizza",
      "address" : "6801 Hollywood Blvd",
      "location" : "Hollywood - CA",
        "image" : "assets/restaurent/pizza.jpg"
         },
         {
         "id" : 2,
    "name" : "Paradise Biryani Pointe",
    "type" : "Indian, Biryani",
    "address" : "18158 Pioneer Blvd",
    "location" : "Artesia - CA",
    "image" : "assets/restaurent/indian.jpg"
                },
                {
    "id" : 3,
    "name" : "Hiccups Tea House",
    "type" : "Viatnamese, Noodules",
    "address" : "5732 Lakewood Blvd",
    "location" : "Long Beach - CA",
    "image" : "assets/restaurent/hiccups.jpg"
                },
                {
    "id" : 4,
    "name" : "Nugget Pub and Grill",
    "type" : "Mexican, Tacos",
    "address" : "3487 Sunset Blvd",
    "location" : "Los Angeles - CA",
    "image" : "assets/restaurent/tacos.jpg"
                },
                {
    "id" : 5,
    "name" : "Thai Continental Cusine",
    "type" : "Thai, BBQ",
    "address" : "6823 Redondo Beach Blvd",
    "location" : " Burbank - CA",
    "image" : "assets/restaurent/thai.jpg"
                }
      ];
    }

}

