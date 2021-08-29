import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project  } from "../models/project";
import { global } from "./global";

@Injectable({
  providedIn: 'root'
})
export class ProjectService{
  public url:string;

  constructor(
  private _http: HttpClient
  ){
  this.url = global.url;
  }

  testServices(){
    return 'Provando el servicio';
  }
  saveProject(project:Project):Observable<any> {
    let params = JSON.stringify(project);
    let header = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'saveProject',params,{headers: header});
  }

  getProjects(): Observable<any>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'getAllProjects',{headers: header});
  }

  getProject(id): Observable<any>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'getProject/'+id,{headers: header});
  }
  deleteProject(id): Observable<any>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'Project/'+id,{headers: header});
  }
  updateProject(project): Observable<any>{
    let params = JSON.stringify(project)
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'Project/'+project._id,params,{headers: header});
  }
}
