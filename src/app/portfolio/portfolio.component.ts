import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsComponent } from '../browser-animations/browser-animations.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
        animate('0.5s')
      ]),
    ]),
  ],
})

export class PortfolioComponent {

  projectsImg = [
    {
      imgs: 'join',
      img: 'join-full2',
      title: 'JOIN - Team Kanban Board',
      url: 'davide-niola.developerakademie.net/Join/index.html',
      git: 'github.com/DNiola/Join',
      info: "    My easy - to - use web application JOIN Online Kanban Project Manager allows you and your team to manage tasks, projects and deadlines.Organize your work with custom boards and contact lists, create task cards and assign them to team members.      ",
      subInfo: "JavaScript | HTML | CSS"
    },
    {
      imgs: 'pepe',
      img: 'pepe-full2',
      title: 'PEPE - El Pollo Loco',
      url: 'davide-niola.developerakademie.net/pepe/index.html',
      git: 'github.com/DNiola/El-Polo-Loco',
      info: "In my exciting 2D game, you take on the role of Pepe, a brave hero tasked with saving the little chickens from the menacing Boss Chicken.Collect coins to increase your strength and bottles to defeat the boss, but use them sparingly!",
      subInfo: "JavaScript | HTML | CSS"
    },
    {
      imgs: 'pokedex',
      img: 'pokedex-full',
      title: 'Pokemon - Pokedex',
      url: 'davide-niola.developerakademie.net/pokedex/index.html',
      git: 'github.com/DNiola/pokedex',
      info: "My interactive Pokédex web application provides a comprehensive collection of Pokémon information. It allows you to search for your favorite Pokémon and explore their abilities, types, and stats. Thanks to the built-in real-time API, the data is always up to date, so you'll be well informed about the world of Pokémon.",
      subInfo: "JavaScript | HTML | CSS | API"
    }, { // fehlt noch komplett
      imgs: 'pokedex',
      img: 'pepe-full',
      title: 'COOMING SOON',
      url: 'google.com/',
      git: 'google.com/',
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam natus ab est excepturi id dolorum et corporis earum nihil nostrum. Amet, aliquam. Nobis, voluptate et. Reprehenderit provident neque tenetur accusamus?",
      subInfo: "hallo world"
    }
  ]


  animationPlayed = [];
  isVisible = [];
  animated = [];
  slideIn = 'hidden';
  section = '.animate';
  BrowserAnimationsComponent: any;


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
