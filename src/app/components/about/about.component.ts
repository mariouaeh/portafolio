import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title:string;
  public subtitle:string;
  public web:string;
  public img:string;

  constructor() {
    this.title = "Hi, soy Mario Torres Garcia";
    this.subtitle = "Desarrollador web Jr.";
    this.web = "From TorresnetCompany";
    this.img = "../../../assets/img/mario.gif"
  }

  ngOnInit(): void {

  }

  chageColor(e){
    console.log('hi');
    let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    e.style.color = randomColor
  }

}
