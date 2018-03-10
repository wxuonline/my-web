import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { WebListComponent }      from './list.component';
import { WebRoutingModule }       from './web-routing.module';

@NgModule({
    imports: [
        CommonModule,
        WebRoutingModule,
    ],
    declarations: [
        WebListComponent,
    ]
})
export class WebModule {}

