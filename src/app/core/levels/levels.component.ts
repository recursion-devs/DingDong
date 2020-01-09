import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  levels = [
    {
      "name":"Dingdong Dantes",
      "ans":"Dingdong DoneTest",
      "level":"0",
      "credit":"David Carlo Lucenara",
      "link":"https://www.facebook.com/larxco/posts/3203370123012414",
      "image":"1.png"
    },
    {
      "name":"Dingdong Dantes",
      "ans":"Dingdong Godbless",
      "level":"0",
      "credit":"Gabriel Alanis",
      "link":"https://www.facebook.com/gabalanisss/posts/2936052429740309",
      "image":"2.png"
    },
    {
      "name":"Dingdong Dantes",
      "ans":"Dingdong Darkness",
      "level":"0",
      "credit":"Joshua Eclipse",
      "link":"https://www.facebook.com/JoshuaEclipse/posts/2884276901593940",
      "image":"3.png"
    },
    {
      "name":"Dingdong Dantes",
      "ans":"Dingdong Dauntless",
      "level":"0",
      "credit":"Storm Gatchalian",
      "link":"https://www.facebook.com/stormtristan/posts/10212455461620716",
      "image":"4.png"
    },
    {
      "name":"Dingdong Dantes",
      "ans":"Chingchong Dantes",
      "level":"0",
      "credit":"Jay Vee",
      "link":"https://www.facebook.com/photo.php?fbid=2667629313321670",
      "image":"5.png"
    },
    {
      "name":"Shernan",
      "ans":"Ed Shernan",
      "level":"0",
      "credit":"Jay Vee",
      "link":"https://www.facebook.com/photo.php?fbid=2667629616654973",
      "image":"6.png"
    },
    {
      "name":"Jessica Soho",
      "ans":"Jessica Sogi",
      "level":"0",
      "credit":"Jay Vee",
      "link":"https://www.facebook.com/photo.php?fbid=2667628709988397",
      "image":"7.png"
    },
    {
      "name":"Raffy Tulfo",
      "ans":"Puppy Tulfo",
      "level":"0",
      "credit":"Jay Vee",
      "link":"https://www.facebook.com/photo.php?fbid=2667628489988419",
      "image":"8.png"
    },
    {
      "name":"Dingdong Dantes",
      "ans":"Dingdong Buntis",
      "level":"0",
      "credit":"Jv Lepornio",
      "link":"https://www.facebook.com/photo.php?fbid=461736698047715",
      "image":"9.png"
    },
    {
      "name":"Boy Abunda",
      "ans":"Boy Abundat",
      "level":"0",
      "credit":"Jay Vee",
      "link":"https://www.facebook.com/photo.php?fbid=2667628773321724",
      "image":"10.png"
    },
    {
      "name":"LizQuen",
      "ans":"LizQuen Look and LizQuen and Learn",
      "level":"2",
      "credit":"Kurt Russel Mendoza",
      "link":"https://www.facebook.com/photo.php?fbid=464808654430416&set=a.123762701868348",
      "image":"11.png"
    },
    {
      "name":"Ed Caluag",
      "ans":"Ed Caluag",
      "level":"0",
      "credit":"Jay Vee",
      "link":"https://www.facebook.com/photo.php?fbid=2667628713321730&set=a.1035093456575272",
      "image":"12.png"
    },
    {
      "name":"Jhong Hilario",
      "ans":"Jhong Hilarious",
      "level":"2",
      "credit":"Jomarcel Oco",
      "link":"https://www.facebook.com/photo.php?fbid=212641353076162&set=a.108176843522614",
      "image":"13.png"
    }
]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLevel(item){
    this.router.navigate(['level-content'], {queryParams: {data: JSON.stringify(item)}});
  }
}
