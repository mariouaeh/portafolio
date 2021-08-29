import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/service-project.service";
import { ServiceUploadService } from "../../service/service-upload.service";
import { global } from "../../service/global";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public title:string;
  public project:Project;
  public status:string;
  public url:string;
  public FilesToUpload:Array<File>;
  public save_project;
  constructor(
    private _ProjectService:ProjectService,
    private _uploadService:ServiceUploadService
  ) {
    this.title = "Crear un Projecto Nuevo";
    this.project = new Project('','','','',2019,'','','','');
    this.url = global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._ProjectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
      //Subir la imagen
      this._uploadService.makeFileRequest(global.url+"uploadimg/"+response.project._id,[],this.FilesToUpload,'imagen').then((resul:any)=>{
        this.status = 'true';
        this.save_project = response.project;
        form.reset();

      })
      },
      error =>{
        console.log(<any>error);
        this.status = 'false';
      }
    )

  }

  fileChange(fileInput:any){
    this.FilesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.FilesToUpload);
    console.log(fileInput);

  }


}
