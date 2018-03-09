import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { WebArticleComponent } from './article.component';

const articleRoutes: Routes = [{
    path: '',
    // component: WebArticleComponent,
    children: [{
        path: '',
        children: [
            // { path: '', component: WebArticleComponent }
            {
                path: 'resume2018',
                loadChildren: 'app/resume/resume.module#ResumeModule',
            }
        ]
    }]
}]

@NgModule({
    imports: [
        RouterModule.forChild(articleRoutes)
    ],
    exports: [ RouterModule ]
})

export class schedulingRoutingModule {}
