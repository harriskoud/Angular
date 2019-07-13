import { Component, OnInit } from '@angular/core';
import { GithubConsumerServiceService } from '../github-consumer-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'github-consumer',
  templateUrl: './github-consumer.component.html',
  styleUrls: ['./github-consumer.component.css']
})
export class GithubConsumerComponent implements OnInit {

  followers: any[];

  form = new FormGroup({
    "username": new FormControl('',Validators.required)
  })

  constructor(private gitHubService: GithubConsumerServiceService ) { }

  ngOnInit() {
  }

  getFollowersByUserName(){
    console.log(this.username.value);
    if(this.username.value!= '')
    this.gitHubService.getUserFollowers(this.username.value).subscribe(followers => this.followers = followers);
  }

get username(){
  return this.form.get('username');
}

}
