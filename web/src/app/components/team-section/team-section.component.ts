import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
})
export class TeamSectionComponent {
  teamMembers = [
    {
      name: 'Amara Okafor',
      role: 'Founding Director',
      image: 'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/team1.jpg'
    },
    {
      name: 'David Chen',
      role: 'Lead Research Engineer',
      image: 'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/team2.jpg'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Product Strategy',
      image: 'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/team3.jpg'
    },
    {
      name: 'Marcus Thorne',
      role: 'Ethics & Community',
      image: 'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/team4.jpg'
    }
  ];
}