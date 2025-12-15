import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  openLink() {
    window.open('https://twitter.com/LishLimited');
  }
  openInst(){
    window.open('https://Instagram.com/lish_ai_labs/')
  }
  openYtb(){
    window.open('https://www.youtube.com/@LishAICenter/videos')
  }
  openGit(){
    window.open('')
  }
  openLinked(){
    window.open('https://www.linkedin.com/company/lish-ai-labs/')
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
