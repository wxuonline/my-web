import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Article } from '../article';
import { ArticleService } from '../list.service';

@Component({
    selector: 'web-article',
    templateUrl: './article.component.html',
    styleUrls: [ './article.component.less' ]
})

export class WebArticleComponent {
    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    @Input() article: Article;
    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) =>
            this.articleService.getBlog(+params.get('id'))
        ).subscribe(article => this.article = article);
    }

    goBack(): void{
        this.location.back();
    }
}
