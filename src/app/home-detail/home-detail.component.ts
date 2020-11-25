import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  currentHouse = null;
  message = '';

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getHouse(this.route.snapshot.paramMap.get('id'));
  }

  getHouse(id):void {
    this.homeService.getHouse(id).subscribe(data=>{
      this.currentHouse = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  updateHouse(): void {
    this.homeService.updateHouse(this.currentHouse.id, this.currentHouse).subscribe(response => {
      console.log(response);
      this.message = 'This house post has been update successfully';
    }, error => {
      console.log(error);
    })
  }

  deleteHouse(): void {
    this.homeService.deleteHouse(this.currentHouse.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/houses']);
    }, error => {
      console.log(error);
    })
  }

}
