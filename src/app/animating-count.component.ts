import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    Input,
    ViewChild,
  } from '@angular/core';
  
  @Component({
    selector: 'app-animating-count',
    standalone: true,
    template: `<h2 #count  class="text-white mb-2 counter"></h2>`,
  })
  export class AnimatingCount implements AfterViewInit {
    private isAnimationTrigger = false;
  
    @Input() count = 0;
    @Input() skips = 1;
    @Input() yOffset = 0;
    @Input() interval = 15;
    @ViewChild('count', { static: false }) countRef: ElementRef;
  
    constructor() {}
  
    ngAfterViewInit() {
      this.countHeadingRef.innerHTML = '0';
      this.counterAnimationHandler();
    }
  
    @HostListener('document:scroll') onScrollEvent() {
      this.counterAnimationHandler();
    }
  
    private counterAnimationHandler() {
      if (!this.isAnimationTrigger && this.isElementInViewport()) {
        this.isAnimationTrigger = true;
        this.triggerCountAnimation();
      }
    }
  
    private isElementInViewport() {
        
        if (typeof window !== "undefined") {
            const { innerHeight, innerWidth } = window;
            const { top, bottom, left, right } = (<HTMLHeadElement>(
              this.countRef.nativeElement
            )).getBoundingClientRect();

            // console.log(bottom + "bottom");
            // console.log(innerHeight + "innerHeight");
            // console.log(this.yOffset + "yOffset");
            // console.log(innerHeight - this.yOffset + "innerHeight-yOffset");
            
        
            return (
              top >= 0 &&
              left >= 0 &&
              bottom <= innerHeight - this.yOffset &&
              right <= innerWidth
            );
        }

        return false;
    
    }
  
    private triggerCountAnimation() {
      this.isAnimationTrigger = true;
      let counter = 0;
      let { count, multiplier } = this.convertToWhole();
      //console.log(count);
      const intervalRef = setInterval(() => {
        if (counter === count) {
          clearInterval(intervalRef);
          return;
        }
  
        counter += this.skips;
  
        counter = counter > count ? count : counter;
  
        //console.log(counter);
  
        const toFixedNo = multiplier === 1 ? 0 : multiplier.toString().length - 1;
  
        this.countHeadingRef.innerText = (counter / multiplier)
          .toFixed(toFixedNo)
          .toString();
      }, this.interval);
    }
  
    private get countHeadingRef(): HTMLHeadElement {
      return <HTMLHeadElement>this.countRef.nativeElement;
    }
  
    private convertToWhole() {
      const countStr = this.count.toString();
      const decimalIndex = countStr.indexOf('.');
      if (decimalIndex > 0) {
        const decimalDigitCount = countStr.slice(decimalIndex + 1).length;
        const multiplier = Math.pow(10, decimalDigitCount);
        return { count: this.count * multiplier, multiplier };
      }
      return { count: this.count, multiplier: 1 };
    }
  }
  