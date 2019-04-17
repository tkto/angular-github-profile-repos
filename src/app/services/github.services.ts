import {Injectable} from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class GithubService {
    private username:string;
    private client_id:'e2a4501caab529d9c20a';
    private client_secret ='b85c0d41ebad7d547997efc5a6ca312cb7da3516';

    constructor(private _http:HttpClient){
    console.log('github service ready');
    this.username = 'tkto';

    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
       
        }
        getRepos(){
            return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret);
        }
  
}
