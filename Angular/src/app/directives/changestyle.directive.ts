import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangestyle]'
})
export class ChangestyleDirective {
private _elem;
  constructor(elem: ElementRef) {
    this._elem=elem;
    elem.nativeElement.style.color="red";
    elem.nativeElement.style.background="yellow";
    elem.nativeElement.style.fontWeight='bold';
    elem.nativeElement.style.border='1px solid red'
  }
  @HostListener('mouseenter') onmouseenter()
  {
    this._elem.nativeElement.style.background="blue";
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this._elem.nativeElement.style.background="yellow";
  }

}
