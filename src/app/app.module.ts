import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BlogsListComponent } from './blogs/list.component';
import { BlogsService } from './blogs/list.service';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        BlogsListComponent,
        PersonalComponent,
    ],
    providers: [ BlogsService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
