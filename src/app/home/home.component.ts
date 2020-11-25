import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  houses = []


  constructor(private homeService:HomeService) { }

  // findHouses(){
  //   this.homeService.getHouses()
  //     .subscribe(
  //       data => {
  //         this.houses = data;
  //         console.log(data);
  //       },
  //       error=> {
  //         console.log(error);
  //       }

  //     )
  // }

  // refreshList(): void {
  //   this.findHouses();
  //   this.currentHouse = null;
  //   this.currentIndex = -1;
  // }

  // setActiveHouse(house, index):void {
  //   this.currentHouse = house;
  //   this.currentIndex = index;
  // }

  ngOnInit() {
    this.homeService.getHouses().subscribe((data: any[]) => {
      console.log(data);
      this.houses=data;
    })
  }

}
