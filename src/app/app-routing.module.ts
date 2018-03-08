import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsListComponent } from './blogs/list.component';
import { WebListComponent } from './web/list.component';
import { WebArticleComponent } from './web/article.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/resume2018',
      pathMatch: 'full'
    },
    {
        path: 'blogs',
        component: BlogsListComponent
    },
    {
        path: 'webs',
        component: WebListComponent
    },
    {
        path: 'webs/:id',
        component: WebArticleComponent
    },
    {
        path: 'resume2018',
        loadChildren: 'app/resume/resume.module#ResumeModule',
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
