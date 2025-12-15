import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {}

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
}
