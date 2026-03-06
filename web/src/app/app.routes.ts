import { Routes } from '@angular/router';
/** New Revamp Pages */
import { HomePage } from './pages/home-page/home-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { PartnerPage } from './pages/partner-page/partner-page';
import { CareerPage } from './pages/career-page/career-page';
import { AboutPage } from './pages/about-page/about-page';
import { SuccessPage } from './pages/success-page/success-page';
import { TechServicesPage } from './pages/tech-services-page/tech-services-page';
import { UpskillingSevicesPage } from './pages/upskilling-sevices-page/upskilling-sevices-page';
import { OurFacilityPage } from './pages/our-facility-page/our-facility-page';
import { ProgramsPage } from './pages/programs-page/programs-page';
import { BpoSevicesPage } from './pages/bpo-sevices-page/bpo-sevices-page';

/** Old Pages */
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { December2022Component } from './pages/blogpages/december2022/december2022.component';
// import { August2023Component } from './pages/blogpages/august2023/august2023.component';
// import { September2023Component } from './pages/blogpages/september2023/september2023.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { TrainingComponent } from './pages/training/training.component';
import { AppLayoutComponent } from './layouts/app.component';
import { TechLayoutComponent } from './layouts/tech-layout.component';
import { TechLandingPage } from './pages/tech/tech-landing-page/tech-landing-page';
import { TeamPage } from './pages/tech/team/team-page';
import { UsersPage } from './pages/tech/users/users-page';
import { UserProfile } from './components/tech/user-profile/user-profile.component';
import { AiAndMachineLearningComponent } from './pages/main/ourservices/ai-and-machine-learning/ai-and-machine-learning.component';
import { DataAnnotationComponent } from './pages/main/ourservices/data-annotation/data-annotation.component';
import { DesignAndDevelopmentComponent } from './pages/main/ourservices/design-and-development/design-and-development.component';
import { EmploymentPlacementComponent } from './pages/main/ourservices/employment-placement/employment-placement.component';
import { SkillBuildingProgramsComponent } from './pages/main/ourservices/skill-building-programs/skill-building-programs.component';

export const routes: Routes = [
  /**1. STANDARD ROUTES (Main Layout) */
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      /** New Revamp Pages */
      { path: 'home', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'contact', component: ContactPage },
      { path: 'partner', component: PartnerPage },
      { path: 'career', component: CareerPage },
      { path: 'success', component: SuccessPage },
      { path: 'tech-services', component: TechServicesPage },
      { path: 'upskilling-services', component: UpskillingSevicesPage },
      { path: 'our-facility', component: OurFacilityPage },
      { path: 'programs', component: ProgramsPage },
      { path: 'bpo-services', component: BpoSevicesPage },

      /** Old Pages */
      // { path: 'blog', component: BlogComponent },
      // { path: 'blog/december2022', component: December2022Component },
      { path: 'partnership', component: PartnershipComponent },
      { path: 'training', component: TrainingComponent },
      {
        path: 'services/ai-and-machine-learning',
        component: AiAndMachineLearningComponent,
      },
      { path: 'services/data-annotation', component: DataAnnotationComponent },
      {
        path: 'services/design-and-development',
        component: DesignAndDevelopmentComponent,
      },
      {
        path: 'services/employment-placement',
        component: EmploymentPlacementComponent,
      },
      {
        path: 'services/skill-building-programs',
        component: SkillBuildingProgramsComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  /**2. TECH ROUTES (Tech Layout) */
  {
    path: 'tech',
    component: TechLayoutComponent,
    children: [
      { path: '', component: TechLandingPage },
      { path: 'team', component: TeamPage },
      { path: 'home', component: HomeComponent },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'users',
        component: UsersPage,
        //   ,children: [
        //   { path: 'profile', component: UserProfile }
        // ]
      },
    ],
  },

  /**3. WILDCARD (Outside of layouts or inside Main) */
  { path: '**', redirectTo: 'home' },
];
