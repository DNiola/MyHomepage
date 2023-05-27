import { Injectable, ElementRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrowserAnimationsComponent {
    elementRef: string;
    slideIn: string;

    constructor() { }

    checkVisibility(section, elementRef: ElementRef) {
        let elements = elementRef.nativeElement.querySelectorAll(section);
        let elementsStatus = [];
        elements.forEach((element, index) => {
            let rect = element.getBoundingClientRect();
            let isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (!elementsStatus[index]) {
                elementsStatus[index] = { isVisible: isInViewport, animationPlayed: isInViewport };
            } else {
                if (!elementsStatus[index].animationPlayed) {
                    elementsStatus[index].isVisible = isInViewport;
                    elementsStatus[index].animationPlayed = isInViewport;
                }
            }
        });
        return elementsStatus;
    }
}


