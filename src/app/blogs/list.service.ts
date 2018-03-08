import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { Blog } from './blog';

@Injectable()
export class BlogsService {
    private blogsUrl = 'api/blogsList';
    constructor(private http: Http) {}

    getBlogs(): Promise<Blog[]> {
        return this.http.get(this.blogsUrl)
                   .toPromise()
                   .then(reponse => reponse.json().data as Blog[])
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getBlogsSlowly(): Promise<Blog[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getBlogs()), 2000);
        })
    }
    getBlog(id: number): Promise<Blog> {
        const url = `${this.blogsUrl}/${id}`;
        return this.http.get(url)
                   .toPromise().then(response => response.json().data as Blog)
                   .catch(this.handleError);
    }

}
