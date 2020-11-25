import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any;
  currentCat = null;
  currentIndex = -1

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.receiveCats();
  }

  receiveCats():void {
    this.categoryService.getCats().subscribe(data=>{
      this.categories = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  refreshList():void {
    this.receiveCats();
    this.currentCat = null;
    this.currentIndex = -1
  }

  setActiveCat(category, index): void{
    this.currentCat = category;
    this.currentIndex = index;
  }

}
