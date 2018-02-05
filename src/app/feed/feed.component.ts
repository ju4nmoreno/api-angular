import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  @Input("info") data:string;

  constructor(){}

  ngOnInit() {}

  stars(nu){

    var x = [];

    for(let i = 0; i<nu; i++){
      x.push(i);
    }
    return x
  }

}
