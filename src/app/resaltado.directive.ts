import { Directive, ElementRef } from '@angular/core';
declare let $:any;
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
  public el: ElementRef
  ) {

  }
  ngOnInit(): void {
    let element = this.el.nativeElement;
    element.style.color = "white";
    setInterval(function(){
      var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      element.style.background = randomColor;


      console.log();

    }, 2000);
  }

}
