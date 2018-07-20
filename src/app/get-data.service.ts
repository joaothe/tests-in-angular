import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }

}
