import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './article';
import { ArticleService } from './list.service';

@Component({
    selector: 'web-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ],
})

export class WebListComponent {
    article: Article[] = [];
    selectedArticle: Article;

    constructor(
        private articleService: ArticleService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.articleService.getBlogs().then(article => console.log(article));
        // this.articleService.getBlogs().then(article => this.article = article.slice(0, 9));
    }

    gotoDetail(string: string): void {
        // this.router.navigate(['./webs', string]);
    }
}
