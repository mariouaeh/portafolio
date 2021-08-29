import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/service-project.service";
import { ServiceUploadService } from "../../service/service-upload.service";
import { global } from "../../service/global";
import {ActivatedRoute, Params , Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public title:string;
  public project:Project;
  public status:string;
  public FilesToUpload:Array<File>;
  public save_project;
  public url:string;
  constructor(
    private _ProjectService:ProjectService,
    private _uploadService:ServiceUploadService,
    private _route: ActivatedRoute
  ) {
    this.title = "Editar Proyecto";
    this.project = new Project('','','','',2019,'','','','');
    this.url =global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getProyect(id);
    });
  }

  getProyect(id){
    this._ProjectService.getProject(id).subscribe(
      response => {
        this.project =  response.project;
      },
      error => {
        console.log(<any>error);

      }
    )
  }

  fileChange(fileInput:any){
    this.FilesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.FilesToUpload);
    console.log(fileInput);

  }
  onSubmit(project){
    this._ProjectService.updateProject(this.project).subscribe(
      response=>{
        console.log(response);
      //Subir la imagen
      if(this.FilesToUpload){
          this._uploadService.makeFileRequest(global.url+"uploadimg/"+response.project._id,[],this.FilesToUpload,'imagen').then((resul:any)=>{
            this.status = 'true';
            this.save_project = response.project;

          })
      }else{
        this.status = 'true';
        this.save_project = response.project;

      }
      },
      error =>{
        console.log(<any>error);
        this.status = 'false';
      }
    )
  }

}
