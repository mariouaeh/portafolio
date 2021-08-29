import { Component, OnInit, ViewChild } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public widthSlider_t:boolean;
  @ViewChild('textos', {static: true}) textos;
  public Autor:any;
  constructor() { }

  ngOnInit(): void {

    $("#title-contact").click(function(e){
      if(e.which === 1){
        e.preventDefault();
        let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        $("#title-contact").css("color",randomColor);
        console.log(e.which);
      }
      else if(e.which === 3){
        e.preventDefault();
        $("#title-contact").css("color","#5C84B5");
      }
      console.log(e.which);
    })
this.widthSlider_t=false
}


cargarSlider(){
  this.widthSlider_t=true
}

pushAutor(e){
this.Autor = e;
}

}
