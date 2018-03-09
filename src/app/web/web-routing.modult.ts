import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebListComponent } from './list.component';

const articleRoutes: Routes = [{
    path: '',
    // component: WebListComponent,
    children: [{
        path: '',
        children: [
            // { path: '', component: WebListComponent }
            {
                path: 'resume2018',
                loadChildren: 'app/resume/resume.module#ResumeModule',
            }
        ]
    }]
}]

const webRoutes: Routes = [
    {
      path: '',
      redirectTo: '/webs',
      pathMatch: 'full'
    },
    {
    path: '/webs',
    component: WebListComponent,
    children: [
      // { path: 'profile', component: ProfileSettingsComponent }
    ]
  },
    // {
    //     path: 'blogs',
    //     component: BlogsListComponent
    // },
    // {
    //     path: 'webs',
    //     component: WebListComponent
    // },
    // {
    //     path: 'webs/:route',
    //     loadChildren: 'app/web/scheduling.module#WebSchedulingModule',
    //     // component: WebArticleComponent
    // },
    // {
    //     path: 'resume2018',
    //     loadChildren: 'app/resume/resume.module#ResumeModule',
    // }
];
@NgModule({
    imports: [
        RouterModule.forChild(webRoutes)
    ],
    exports: [ RouterModule ]
})

export class schedulingRoutingModule {}
