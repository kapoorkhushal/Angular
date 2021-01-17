import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor() { }

  private highlight = false;

  @HostBinding('class.has-background-warning')
  get className(){
    return this.highlight;
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.highlight = true;
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.highlight = false;
  }
}
