import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  showModal: boolean = false; // Add this line

  /**method to toggle header */
  toggleHeader() {
    document.getElementById('navbar-sticky')?.classList.toggle('hidden');
  }

  /**method to open application form */
  openApplyForm(){
    this.showModal = true; // Modify this line
  }
}
