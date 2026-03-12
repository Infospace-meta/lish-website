import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll-section',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-scroll-section.component.html',
  styleUrl: './horizontal-scroll-section.component.scss',
})
export class HorizontalScrollSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pinWrapper') pinWrapper!: ElementRef<HTMLElement>;
  @ViewChild('cardsTrack') cardsTrack!: ElementRef<HTMLElement>;

  wrapperHeight: number = 0;
  private overflowWidth: number = 0;
  private scrollListener!: () => void;
  private resizeObserver!: ResizeObserver;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    /** Defer one frame so cards have rendered and have their widths */
    requestAnimationFrame(() => {
      this.calculate();
    });

    this.ngZone.runOutsideAngular(() => {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener, { passive: true });

      this.resizeObserver = new ResizeObserver(() => {
        this.calculate();
      });

      /** Observe when available */
      requestAnimationFrame(() => {
        if (this.cardsTrack?.nativeElement) {
          this.resizeObserver.observe(this.cardsTrack.nativeElement);
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private calculate(): void {
    const track = this.cardsTrack?.nativeElement;
    if (!track) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    this.overflowWidth = Math.max(0, track.scrollWidth - viewportWidth);
    this.wrapperHeight = viewportHeight + this.overflowWidth;

    this.ngZone.run(() => this.cdr.detectChanges());
    this.onScroll();
  }

  private onScroll(): void {
    const wrapper = this.pinWrapper?.nativeElement;
    const track = this.cardsTrack?.nativeElement;
    if (!wrapper || !track || this.overflowWidth === 0) return;

    const rect = wrapper.getBoundingClientRect();
    /** relativeScroll: 0 when wrapper top hits viewport top, increases as we scroll */
    const relativeScroll = -rect.top;
    const pinDistance = this.wrapperHeight - window.innerHeight;

    let translateX: number;
    if (relativeScroll <= 0) {
      translateX = 0;
    } else if (relativeScroll >= pinDistance) {
      translateX = this.overflowWidth;
    } else {
      translateX = (relativeScroll / pinDistance) * this.overflowWidth;
    }

    track.style.transform = `translateX(-${translateX}px)`;
  }
}
