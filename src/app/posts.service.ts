import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

  constructor(private http: Http) {}
  
  getAllPosts(stars:string='all', str:string){
    return this.http.get(`http://localhost:8010/api/${stars}/${str}`).map(res => res.json());
  }

}
