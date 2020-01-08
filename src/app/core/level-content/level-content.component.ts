import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-level-content',
  templateUrl: './level-content.component.html',
  styleUrls: ['./level-content.component.scss']
})
export class LevelContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickHome(){
    this.router.navigateByUrl("/home")
  }

}
