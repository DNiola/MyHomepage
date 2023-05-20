import { Component } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})


export class IntroComponent {

  introIcons = [
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/davide-niola-a445aa276/'
    },
    {
      icon: 'Github',
      url: 'https://github.com/DNiola'
    },
    {
      icon: 'Mail',
      url: 'mailto:Davide.n2@gmx.de'
    }
  ];


  constructor() { }

  scrollToElement(element: string): void {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Element with ID "${element}" not found.`);
    }
  }
}
