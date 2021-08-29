import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
declare let $:any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() tamaño:number;
  @Output() getAutor = new EventEmitter();

  public autor:any;
  constructor() {
    this.autor = {
      nombre: "Mario Torres Garcia",
      email: "to325712@uaeh.edu.mx",
      edad: "23"
    }
  }

  ngOnInit(): void {
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: this.tamaño
  });
  }

  Lanza(e){
    this.getAutor.emit(this.autor);
  }

  }

