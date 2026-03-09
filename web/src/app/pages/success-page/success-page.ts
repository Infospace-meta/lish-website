import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './success-page.html',
})
export class SuccessPage {
  projects = [
    {
      id: '01',
      title: 'Vision IMT',
      subtitle: 'Labor market dynamics analytics solution',
      image:
        'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716046/samples/Lish-website/IMG_4945_mizqkg.jpg',
      description:
        'We supported the creation of an analytics solution designed to better understand labor market dynamics and youth employment trends.',
      challenges:
        'Managing diverse external data sources and harmonizing different data granularities while ensuring a seamless experience for non-technical users.',
      results:
        'Today, the solution enables data-driven decision-making for over 100 users, integrating 44 Statistics Canada tables and continuously updating 23 key indicators.',
      tech: ['Power BI', 'Azure Data Infrastructure', 'Python', 'SQL'],
      isOpen: true,
    },
    {
      id: '02',
      title: 'Lish AI Core ERP',
      subtitle: 'Optimizing laboratory operations through AI',
      image:
        'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716340/samples/Lish-website/IMG_5050_qkexrb.jpg',
      description:
        'Developing a dedicated application for managing laboratory accounts and real-time project tracking across regional hubs.',
      challenges:
        'The project needed to allow continuous creation and reactivation of supplier accounts without disrupting existing workflows.',
      results:
        'Centralized automation of supplier accounts now used by 300+ users monthly, allowing for real-time access to key performance indicators.',
      tech: ['Power Apps', 'Custom API Connectors', 'Azure SQL', 'Power BI'],
      isOpen: true,
    },
    {
      id: '03',
      title: 'Strategic Data Warehouse',
      subtitle: 'Centralizing sales and market data',
      image:
        'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716390/samples/Lish-website/IMG_5145_waietl.jpg',
      description:
        'Our goal was to centralize and standardize market data in order to analyze consumer behavior and model regional growth.',
      challenges:
        'Managing more than 70 tables from heterogeneous sources while ensuring data quality and reliability despite frequent format changes.',
      results:
        'A medallion architecture (Bronze, Silver, Gold) that enables users to explore data and create their own analyses with reliable SCD mechanisms.',
      tech: ['Microsoft Fabric', 'SQL Data Warehouse', 'DAX', 'DevOps'],
      isOpen: true,
    },
  ];

  toggleProject(index: number) {
    this.projects[index].isOpen = !this.projects[index].isOpen;
  }
}
