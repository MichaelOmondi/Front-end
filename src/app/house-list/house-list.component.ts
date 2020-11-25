import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  houses:any;
  currentHouse = null;
  currentIndex = -1;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.receiveHouses();
  }

  receiveHouses(): void {
    this.homeService.getHouses().subscribe(data=>{
      this.houses = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  refreshList(): void {
    this.receiveHouses();
    this.currentHouse = null;
    this.currentIndex = -1
  }

  setActiveHouse(house, index): void{
    this.currentHouse = house;
    this.currentIndex = index;
  }

}
