import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = `#F1F7EE`
  private defaultColor: string = `#E0EDC5`
  private defaultHeight: number = 420

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input(`pkmBorderCard`) borderColor!: string;

  @HostListener(`mouseenter`) onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener(`mouseleave`) onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height} px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  }

}
