import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  levels = [1,2,3,4,5,6,7,8,9,10]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLevel(item){
    console.log(item)
    this.router.navigateByUrl("/level-content")
  }
}
