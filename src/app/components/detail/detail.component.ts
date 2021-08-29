import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/service-project.service";
import { global} from "../../service/global";
import {ActivatedRoute, Params , Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public url: string;
  public Project: Project;
  public confirm: boolean;

  constructor(
    private _ProjectService: ProjectService,
    private _route: ActivatedRoute,
    private _Router: Router
  ) {
    this.url = global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getProyect(id);
      console.log(Project);

    });
  }

  getProyect(id){
    this._ProjectService.getProject(id).subscribe(
      response => {
        this.Project =  response.project;
      },
      error => {
        console.log(<any>error);

      }
    )
  }
  setConfir(confirma){
    this.confirm = confirma;
  }
  deleteProyect(id){
    this._ProjectService.deleteProject(id).subscribe(
      response =>{
        if(response.project){
          this._Router.navigate(['/proyectos'])
        }
      },
      error =>{
        console.log(error);

      }
    )
  }

  chageColor(e){
    let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    e.style.color = randomColor
  }

}
