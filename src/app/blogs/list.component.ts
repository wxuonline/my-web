import { Component, OnInit } from '@angular/core';

import { Blog } from './blog';
import { BlogsService } from './list.service';

@Component({
    selector: 'blogs-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ]
})

export class BlogsListComponent {
    blogs: Blog[] = [];
    constructor(private blogsService: BlogsService) {}
    ngOnInit(): void {
        this.blogsService.getBlogs().then(blogs => this.blogs = blogs.slice(1, 10));
    }
}
