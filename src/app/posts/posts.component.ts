import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private url= 'https://jsonplaceholder.typicode.com/posts'
  posts: any[];

  constructor(private http: Http) {
    // http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response =>{
    //   this.posts =response.json()
    // })

  }

  ngOnInit() {
  }

  loadPosts() {
    this.http.get(this.url).subscribe(response => {
      this.posts = response.json();
    })
  }


  unLoadPosts() {
    this.posts = [];
  }

  dividedWith2(i) {
    if (i % 2== 0) return true; else false;
  }

  createPost(input: HTMLInputElement){
    let postObf = {
      title: input.value
    }
    this.http.post(this.url,JSON.stringify(postObf)).subscribe(response => {
        postObf['id'] = response.json().id
        this.posts.splice(0,0,postObf);
        input.value = '';
        console.log(response.json())
    });
  }

}
