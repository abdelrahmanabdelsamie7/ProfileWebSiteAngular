import { Routes } from '@angular/router';
import { AboutMeComponent } from './site/about-me/about-me.component';
import { BlogComponent } from './site/blog/blog.component';
import { ContactComponent } from './site/contact/contact.component';
import { EducationComponent } from './site/education/education.component';
import { ServicesComponent } from './site/services/services.component';
import { NotFoundComponent } from './site/shared/not-found/not-found.component';
import { ProfileComponent } from './site/profile/profile.component';
import { HeroSectionComponent } from './site/hero-section/hero-section.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'Hero', pathMatch: 'full' },
      { path: 'Hero', component: HeroSectionComponent }, 
      { path: 'AboutMe', component: AboutMeComponent },
      { path: 'Blog', component: BlogComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'Resume', component: EducationComponent },
      { path: 'Services', component: ServicesComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
