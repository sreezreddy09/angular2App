import { Component, OnInit } from '@angular/core';

import { RestaurentService } from './restaurent.service';

@Component({
    selector: 'restaurent-list',
    templateUrl: 'app/restaurent/restaurent.component.html',
    providers : [RestaurentService]
})
export class RestaurentComponent implements OnInit {
    public i : number = 0;
    public current : number;
    restaurent: any[];
    constructor(private _restaurentService : RestaurentService) {

     }
    
    getCurrent(i){
        this.current = this.restaurent[i];
    }
    
    listIncrease(){
        if(this.i < 4){
            this.i = this.i + 1;
            this.ngOnInit();
        }
    }

    listReduce(){
        if(this.i > 0){
            this.i = this.i - 1;
            this.ngOnInit();
        }
    }

    ngOnInit() {
        this.restaurent = this._restaurentService.getRestaurent();
        console.log(this.restaurent);
        this.getCurrent(this.i);
        }
    
    
}
