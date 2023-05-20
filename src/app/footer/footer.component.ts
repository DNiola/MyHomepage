import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  footerIcons = [
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
}
