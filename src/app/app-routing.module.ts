import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsListComponent } from './blogs/list.component';
// import { WebListComponent } from './web/list.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/webs',
      pathMatch: 'full'
    },
    {
        path: 'blogs',
        component: BlogsListComponent
    },
    {
        path: 'webs',
        // component: WebListComponent
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
