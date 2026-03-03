import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
})
export class TeamSectionComponent {
  // You can later move the team data here into an array to 
  // use *ngFor in the HTML for cleaner code.
  teamMembers = [
    { name: 'Amara Okafor', role: 'Founding Director', img: 'assets/images/team/amara.jpg' },
    { name: 'David Chen', role: 'Lead Research Engineer', img: 'assets/images/team/david.jpg' },
    { name: 'Sarah Jenkins', role: 'Product Strategy', img: 'assets/images/team/sarah.jpg' },
    { name: 'Marcus Thorne', role: 'Ethics & Community', img: 'assets/images/team/marcus.jpg' }
  ];
}