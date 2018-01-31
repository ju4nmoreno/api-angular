import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;

      console.log(this.posts);
    });
  }

}
