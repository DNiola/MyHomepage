import { Injectable, ElementRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrowserAnimationsComponent {
    elementRef: string;
    slideIn: string;

    constructor() { }

    checkVisibility(section, elementRef: ElementRef) {
        let elements = elementRef.nativeElement.querySelectorAll(section);
        let isVisible = [];
        let animated = [];
        elements.forEach((element, index) => {
            let rect = element.getBoundingClientRect();
            let isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (!animated[index] && isInViewport) {
                isVisible[index] = true;
                animated[index] = true;
                if (this.elementRef = 'Aboutme') {
                    this.slideIn = 'visible';
                }
            } else if (!animated[index] && !isInViewport) {
                isVisible[index] = false;
            }
        });
        return { isVisible, animated };
    }
}



