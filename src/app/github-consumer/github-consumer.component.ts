import { Component, OnInit } from '@angular/core';
import { GithubConsumerServiceService } from '../github-consumer-service.service';

@Component({
  selector: 'github-consumer',
  templateUrl: './github-consumer.component.html',
  styleUrls: ['./github-consumer.component.css']
})
export class GithubConsumerComponent implements OnInit {

  followers: any;

  constructor(private gitHubService: GithubConsumerServiceService ) { }

  ngOnInit() {
  }

  getFollowersByUserName(username: HTMLInputElement){
    this.gitHubService.getUserFollowers(username.value).subscribe(followers => {
      this.followers = followers;
    });
  }

}
