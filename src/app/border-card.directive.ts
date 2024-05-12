import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(420);
    this.setBorder(`#F1F7EE`);
  }

  @HostListener(`mouseenter`) onMouseEnter() {
    this.setBorder(`#E0EDC5`);
  }

  @HostListener(`mouseleave`) onMouseLeave() {
    this.setBorder(`#F1F7EE`)
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height} px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  }

}
