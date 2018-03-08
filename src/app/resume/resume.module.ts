import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { Resume2018Component }      from './resume-2018.component';

import { ResumeRoutingModule }       from './resume-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ResumeRoutingModule,
    ],
    declarations: [
        Resume2018Component,
    ]
})
export class ResumeModule {}
