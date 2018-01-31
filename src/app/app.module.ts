import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SvgIconSpriteModule } from 'ng-svg-icon-sprite';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { FeedComponent } from './feed/feed.component';
import { PostsService } from './posts.service';
import { SvgComponent } from './svg/svg.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    FeedComponent,
    SvgComponent

  ],
  imports: [
    BrowserModule,
    SvgIconSpriteModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
