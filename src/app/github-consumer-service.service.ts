import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubConsumerServiceService {

  gitHubUrl="https://api.github.com/";
  followersPath="users/username/followers";

  constructor(private http: HttpClient) { }

  getUserFollowers(username: string){
    this.followersPath = this.followersPath.replace("username",username);
    return this.http.get(this.gitHubUrl+this.followersPath);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new NotFoundError);
    }
    return Observable.throw(new AppError(error));
  }


}