import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public user;
public repos;
  constructor(private _gitService: GithubService) {
    this._gitService.getUser().subscribe(user => {
    this.user=user;
    });

    this._gitService.getRepos().subscribe(repos => {
      this.repos = repos;
  });
  }
  ngOnInit() {
  }

}
