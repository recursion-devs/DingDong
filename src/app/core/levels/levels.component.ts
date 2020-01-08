import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,24]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLevel(item){
    console.log(item)
    this.router.navigateByUrl("/level-content")
  }
}
