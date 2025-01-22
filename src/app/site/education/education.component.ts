import { Experience } from './../../core/interfaces/experience';
import { Education } from './../../core/interfaces/education';
import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../core/services/education.service';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../core/services/experience.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  EducationData: Education[] = [];
  ExperienceData: Experience[] = [];
  constructor(
    private _EdEducationService: EducationService,
    private _ExperienceService: ExperienceService
  ) {}
  ngOnInit(): void {
    this.getEducationData();
    this.getExperienceData();
  }
  getEducationData() {
    this._EdEducationService.getEducationData().subscribe({
      next: (data: any) => {
        console.log(data);
        this.EducationData = data.data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  getExperienceData() {
    this._ExperienceService.getExperienceData().subscribe({
      next: (data: any) => {
        console.log(data);
        this.ExperienceData = data.data;
        this.ExperienceData.forEach((item: any) => {
          if (item.end_at === null) {
            item.end_at = 'Present';
          }
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
