import { Injectable }      from '@angular/core';
import { Headers, Http }   from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { Article } from './article';

@Injectable()
export class ArticleService {
    private websUrl = 'api/websList';
    constructor(private http: Http) {}

    getBlogs(): Promise<Article[]> {
        return this.http.get(this.websUrl)
                   .toPromise()
                   .then(reponse => reponse.json() as Article[])
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getBlog(id: number): Promise<Article> {
        const url = `${this.websUrl}/${id}`;
        return this.http.get(url)
                   .toPromise().then(response => response.json().data as Article)
                   .catch(this.handleError);
    }

}
