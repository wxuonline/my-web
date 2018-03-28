import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { WebListComponent }      from './list.component';
import { WebRoutingModule }      from './web-routing.module';
import { ArticleService }        from './list.service';

@NgModule({
    imports: [
        CommonModule,
        WebRoutingModule,
    ],
    declarations: [
        WebListComponent,
    ],
    providers: [ ArticleService ]
})
export class WebModule {}
