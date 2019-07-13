import { Injectable } from '@angular/core';
import { NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubConsumerServiceService {

  gitHubUrl="https://api.github.com/";
  followersPath="users/username/followers";
  newPath;

  constructor(private http: Http) { }

  getUserFollowers(username: string){
    this.newPath = this.followersPath.replace("username",username);
    return this.http.get(this.gitHubUrl+this.newPath).map(response=> response.json()).catch(this.handleError);
  }

  private handleError(error: Response) {

    if (error.status === 400) {
      return Observable.throw(new NotFoundError);
    }
    return Observable.throw(new AppError(error));
  }


}