import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/service-project.service";
import { global} from "../../service/global";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects:Project[];
  public url:string;

  constructor(
    private _Projectservice: ProjectService
  ) {
      this.url = global.url;
    }

  ngOnInit(): void {


this.getProject();

}


chageColor(e){
  console.log('hi');
  let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  e.style.color = randomColor
}

  getProject(){
    this._Projectservice.getProjects().subscribe(
      response =>{
        if(response.projects){
          this.projects = response.projects
          console.log(this.projects);

        }

      },
      error =>{
        console.log(error);
      }
    )
  }

}
