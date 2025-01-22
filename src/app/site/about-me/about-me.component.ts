import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about.service';
import { environment } from '../../../environments/environment.development';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',

})
export class AboutMeComponent implements OnInit {
  environmentUrl: string = environment.apiUrl;
  aboutData: any = {} as any;
  constructor(private _AboutService: AboutService) {}
  ngOnInit(): void {
    this.getAboutMeData();
  }
  getAboutMeData() {
    this._AboutService.showSpecificAboutData('').subscribe({
      next: (data: any) => {
        this.aboutData = data.data[0];
      },
      error: (err) => {

      },
    });
  }
  downloadFile() {
    const link = document.createElement('a');
    link.href = './files/Abdelrahman Abdelsamie Hussain.pdf';
    link.download = 'Abdelrahman_Abdelsamie_CV.pdf';
    link.click();
  }
}
