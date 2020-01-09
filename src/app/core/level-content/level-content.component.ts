import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-level-content',
  templateUrl: './level-content.component.html',
  styleUrls: ['./level-content.component.scss']
})
export class LevelContentComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  data: any;
  level = "";

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.data = JSON.parse(params['data'])
      console.log(this.data)
      if (this.data['level'] == "0"){
        this.level = "BASIC";
      }
      else if (this.data['level'] == "1"){
        this.level = "PWEDE NA";
      }
      else if (this.data['level'] == "2"){
        this.level = "HIRAP BES";
      }

    });
  }

  onClickHome(){
    this.router.navigateByUrl("/home")
  }

  onClickBack(){
    this.router.navigateByUrl("/levels")
  }

}
