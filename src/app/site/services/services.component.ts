import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/interfaces/service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  ServicesData: Service[] = [];
  constructor(private _ServiceServiceService: ServiceService) {}
  ngOnInit(): void {
    this.getFooter();
  }
  getFooter() {
    this._ServiceServiceService.getServiceData().subscribe({
      next: (data: any) => {
        console.log(data);
        this.ServicesData = data.data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
