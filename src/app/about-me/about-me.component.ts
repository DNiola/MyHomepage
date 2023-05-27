import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsComponent } from '../browser-animations/browser-animations.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.5s')
      ]),
    ]),
    trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.2s')
      ]),
    ]),
  ],
})


export class AboutMeComponent {
  isVisible = [];
  animationPlayed = [];
  slideIn = 'hidden';
  section = '.animate';

  constructor(private elementRef: ElementRef, private browserAnimationsComponent: BrowserAnimationsComponent) { }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    let elementsStatus = this.browserAnimationsComponent.checkVisibility(this.section, this.elementRef);
    for (let i = 0; i < elementsStatus.length; i++) {
      if (elementsStatus[i].isVisible && !this.animationPlayed[i]) {
        this.animationPlayed[i] = true;
      }
      if (this.animationPlayed[i]) {
        elementsStatus[i].isVisible = true;
      }
    }
    this.isVisible = elementsStatus.map(element => element.isVisible);
  }
}


