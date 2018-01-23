import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { PostsService } from './posts.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(RouterModule)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
