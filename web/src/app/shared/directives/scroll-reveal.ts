import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adds the 'active' class when the section scrolls into view
            this.renderer.addClass(this.el.nativeElement, 'active');
            // Unobserve so the animation only triggers once
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: 0.1, // Triggers when 10% of the element is visible
      },
    );

    observer.observe(this.el.nativeElement);
  }
}
