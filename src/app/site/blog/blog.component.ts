import { Component, OnInit } from '@angular/core';
import { Blog } from '../../core/interfaces/blog';
import { BlogService } from '../../core/services/blog.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  BlogsData: Blog[] = [];
  environmentUrl: string = environment.apiUrl;
  constructor(private _BlogService: BlogService) {}
  ngOnInit(): void {
    this.getFooter();
  }
  getFooter() {
    this._BlogService.getBlogData().subscribe({
      next: (data: any) => {
        console.log(data);
        this.BlogsData = data.data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
