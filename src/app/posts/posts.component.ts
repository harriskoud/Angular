import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/posts'
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
  }

  loadPosts() {
    this.service.loadPosts()
      .subscribe(posts => this.posts = posts);
  }

  unLoadPosts() {
    this.posts = [];
  }

  dividedWith2(i) {
    if (i % 2 == 0) return true; else false;
  }

  createPost(input: HTMLInputElement) {

    let postObj = {
      title: input.value
    }
    this.posts.splice(0, 0, postObj);
    input.value = '';


    this.service.createPost(input, postObj)
      .subscribe(newPost => {
        postObj['id'] = newPost.id;
      },
        (error: Response) => {
          if (error.status === 400) {
            //this.form.setErrors(error.json());
          } else {
            //alert('Unexcepted error ocurred.')
            //console.log(error.json())
            throw error;
          }
        });
  }

  updatePost(post) {
    //this.http.patch(this.url,JSON.stringify({isRead: true}));
    //Perfomnace Benefit if the api supports the patch
    this.service.updatePost(post)
      .subscribe(updatedPost => {
        console.log(updatedPost.json());
      });
  }

  deletePost(post) {
    this.service.deletePost(554454545400)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          //if (error.status === 404) {
          if (error instanceof NotFoundError) {
            alert('This posts has been already deleted')
          }
          else {
            //alert('Unexcepted error ocurred.')
            //console.log(error)
            throw error;
          }
        });
  }

}
