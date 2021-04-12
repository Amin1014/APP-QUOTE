import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor( private elem:ElementRef) {

   }
@HostListener("click") onClick(){
  this.textDeco("green")
}
  textDeco(arg0: string) {
    throw new Error('Method not implemented.');
  }
@HostListener("dblclick") onDoubleClick(){
  this.textDeco("none")
}





}