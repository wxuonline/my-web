import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsListComponent } from './blogs/list.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/blogs',
      pathMatch: 'full'
    },
    {
        path: 'blogs',
        component: BlogsListComponent
    },
    {
        path: 'webs',
        loadChildren: 'app/web/web.module#WebModule',
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
