import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../../core/services/footer.service';
import { Footer } from '../../../core/interfaces/footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  FooterData: Footer[] = [];
  footer: any = {};
  constructor(private _FooterService: FooterService) {}
  ngOnInit(): void {
    this.getFooter();
  }
  getFooter() {
    this._FooterService.getFooterData().subscribe({
      next: (data: any) => {
        console.log(data);
        this.FooterData = data.data;
        this.footer = this.FooterData[0];
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
