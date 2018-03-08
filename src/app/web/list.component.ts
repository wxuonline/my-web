import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './article';
import { ArticleService } from './list.service';

@Component({
    selector: 'web-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ]
})

export class WebListComponent {
    article: Article[] = [];
    selectedArticle: Article;

    constructor(
        private articleService: ArticleService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.articleService.getBlogs().then(article => this.article = article.slice(1, 10));
    }

    gotoDetail(article: Article): void {
        this.selectedArticle = article;
        this.router.navigate(['./webs', this.selectedArticle.id]);
    }
}
