import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  activeLink: number | null = null;
  headerLinks = ['About me', 'Skills', 'Portfolio']
  headerLinksMobile = ['About me', 'Skills', 'Portfolio', 'contact']
  linkDecoration = [false]
  headerLinksOpen: boolean = false;

 
  constructor() {
   }


  ngOnInit() {
    this.setActiveLinkBasedOnScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.setActiveLinkBasedOnScrollPosition();
  }


  setActiveLink(index: number) {
    this.activeLink = index;
  }


  setActiveLinkBasedOnScrollPosition() {
    this.closeMobileLinks()
    let position = this.getSections()
    if (this.sectionArea(position, 'aboutMeSection', 'skillsSection')) {
      this.setAnimationAboutMeSection()
    } else if (this.sectionArea(position, 'skillsSection', 'portfolioSection')) {
      this.setAnimationSkillsSection()
    } else if (this.sectionArea(position, 'portfolioSection', 'contactSection')) {
      this.setAnimationPortfolioSection()
    } else if (this.sectionArea(position, 'contactSection', 'end')) {
      this.setAnimationContactSection()
    } else {
      this.removeAllAnimations()
    }
  }


  getSections() {
    const scrollPosition = window.pageYOffset + 100;
    let aboutMeSection = document.getElementById('Aboutme');
    let skillsSection = document.getElementById('Skills');
    let portfolioSection = document.getElementById('Portfolio');
    let contactSection = document.getElementById('contact');
    return { aboutMeSection, skillsSection, portfolioSection, contactSection, scrollPosition }
  }


  sectionArea(position, sectionKey, nextSectionKey) {
    const section = position[sectionKey];
    const nextSection = position[nextSectionKey];
    if (sectionKey === 'contactSection' && nextSectionKey === 'end') {
      return section && position.scrollPosition >= section.offsetTop;
    } else {
      return section && position.scrollPosition >= section.offsetTop && position.scrollPosition < nextSection.offsetTop;
    }
  }


  removeAllAnimations() {
    this.setActiveLink(null);
    this.linkDecoration[3] = false
    this.linkDecoration[2] = false
    this.linkDecoration[1] = false
    this.linkDecoration[0] = false
  }


  setAnimationAboutMeSection() {
    this.setActiveLink(0);
    this.linkDecoration[0] = true
    this.linkDecoration[1] = false
    this.linkDecoration[2] = false
    this.linkDecoration[3] = false
  }


  setAnimationSkillsSection() {
    this.setActiveLink(1);
    this.linkDecoration[1] = true
    this.linkDecoration[0] = false
    this.linkDecoration[2] = false
    this.linkDecoration[3] = false
  }


  setAnimationPortfolioSection() {
    this.setActiveLink(2);
    this.linkDecoration[2] = true
    this.linkDecoration[1] = false
    this.linkDecoration[0] = false
    this.linkDecoration[3] = false
  }

  setAnimationContactSection() {
    this.setActiveLink(3);
    this.linkDecoration[3] = true
    this.linkDecoration[2] = false
    this.linkDecoration[1] = false
    this.linkDecoration[0] = false
  }


  decorationLink(link: number) {
    this.headerLinksMobile.forEach((currentElement, i) => { // wenn currentElement === element, dann wird linkDecoration[i] = true
      if (i === link) {
        this.scrollToElement(currentElement.replace(' ', ''));
      }
    })
  }


  openMobileLinksTemplate() {
    this.headerLinksOpen = true
  }


  closeMobileLinks() {
    this.headerLinksOpen = false;
  }


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


