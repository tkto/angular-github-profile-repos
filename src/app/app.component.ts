import { Component } from '@angular/core';
import {GithubService} from './services/github.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-website';
  constructor(private _gitService: GithubService) {
    this._gitService.getUser().subscribe(user => {
      console.log(user);
    });

  }
}
