import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebListComponent } from './list.component';


const webRoutes: Routes = [
    // {
    //     path: '',
    //     component: WebListComponent,
    //     children: [{
    //         path: '',
    //         children: [
    //             { path: '', component: WebListComponent }
    //         ]
    //     }]
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

export class WebRoutingModule {}
