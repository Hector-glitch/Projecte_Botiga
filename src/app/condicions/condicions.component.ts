import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-condicions',
  templateUrl: './condicions.component.html',
  styleUrls: ['./condicions.component.css','../../assets/css/Default.css']
})
export class CondicionsComponent {
  negre = true;

  // @ts-ignore
  @ViewChild('fons') fons: ElementRef;
  canviarFons(){
    if(this.negre){
      this.render.addClass(this.fons.nativeElement,'canviarColor')
      this.negre = false;
    }
    else{
      this.render.removeClass(this.fons.nativeElement,'canviarColor')
      this.negre = true;
    }
  }

  constructor(private render: Renderer2) {
  }

}
