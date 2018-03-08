import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Resume2018Component } from './resume-2018.component';

const resumeRoutes: Routes = [
  {
    path: '',
    component: Resume2018Component,
    children: [
      {
        path: '',
        children: [
          { path: '', component: Resume2018Component }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(resumeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeRoutingModule {}
