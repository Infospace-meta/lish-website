import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roadmap-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roadmap-section.component.html',
  styles: [`
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `]
})
export class RoadmapSectionComponent {
  phases = [
    { id: '01', title: 'Pan-African Hub Launch', desc: 'Expanding our physical lab footprint to five major tech cities by 2025.', highlight: true },
    { id: '02', title: 'Open-Source LLM Beta', desc: 'Developing localized language models that respect cultural nuance and linguistic diversity.', highlight: false },
    { id: '03', title: 'Industrial AI Scaling', desc: 'Direct integration of lab-born products into Fortune 500 supply chains and operations.', highlight: false },
    { id: '04', title: 'Global Lab Network', desc: 'Unifying regional labs into a singular global decentralized intelligence network.', highlight: false }
  ];
}