import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsComponent } from '../browser-animations/browser-animations.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('rotate', [
      state('hidden', style({
        opacity: 0,
        transform: 'rotate(0deg)'
      })),
      state('visible', style({
        transform: 'rotate(360deg)'
      })),
      transition('hidden => visible', [
        animate('0.5s')
      ]),
    ]),
    trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.2s')
      ]),
      transition('visible => hidden', [
        animate('0.2s')
      ]),
    ]),
  ],
})


export class SkillsComponent {
  skillsIcons = [
    {
      icon: 'angular.png',
      name: 'Angular',
    }, {
      icon: 'javScript.png',
      name: 'JavaScript',
    }, {
      icon: 'typescript.png',
      name: 'TypeScript',
    }, {
      icon: 'html.png',
      name: 'HTML',
    }, {
      icon: 'css.png',
      name: 'CSS',
    }, {
      icon: 'git.png',
      name: 'GIT',
    }, {
      icon: 'api.png',
      name: 'Rest-API',
    }, {
      icon: 'scrum.png',
      name: 'Scrum',
    },
    // {
    // icon: 'worldpress.png',
    // name: 'Worldpress',
    // },
    {
      icon: 'automation.png',
      name: 'Material design',
    }, {
      icon: 'firebase.png',
      name: 'Firebase',
    },
  ]

  isVisible = [];
  animated = [];
  slideIn = 'hidden';
  section = '.seeIcon';
  BrowserAnimationsComponent: any;

  constructor(private elementRef: ElementRef, private browserAnimationsComponent: BrowserAnimationsComponent) { }


  scrollToElement(element: string) {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID "${element}" not found.`);
    }
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let visibility = this.browserAnimationsComponent.checkVisibility(this.section, this.elementRef);
    this.isVisible = visibility.isVisible;
    this.animated = visibility.animated;
  }
}



