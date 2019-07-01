import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { NotFoundError } from '../common/not-found-error';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts'
  posts: any[];

  constructor(private http: Http) {
  }

  loadPosts() {
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }

  createPost(input: HTMLInputElement, postObj) {
    return this.http.post(this.url, JSON.stringify(postObj)).map(response => response.json()).catch(this.handleError);
  }

  updatePost(post) {
    //this.http.patch(this.url,JSON.stringify({isRead: true}));
    //Perfomnace Benefit if the api supports the patch
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post)).map(response => response.json()).catch(this.handleError);
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        return Observable.throw(new AppError(error));
      });
    //if (error.status === 400) return Observable.throw(new NotFoundError)
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new NotFoundError);
    }
    return Observable.throw(new AppError(error));
  }

}
