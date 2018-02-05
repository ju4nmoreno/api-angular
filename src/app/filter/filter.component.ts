import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  posts: any = [];
  numStars: string = 'all';
  str: string;

  @Input() public info: any = 0;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.loadInfo(this.str);
    
  }

  loadInfo (str){
    
    this.postsService.getAllPosts(this.numStars, str).subscribe(posts => {
      if (posts.success)
        this.info = posts;
      else this.info = 0;
    });
    
  }

  checkInfo(value){

    if(value !== "") this.loadInfo(value);

  }

  change (value){
    this.numStars = value;
  }
}