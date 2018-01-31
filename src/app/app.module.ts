import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
<<<<<<< HEAD
import { FeedComponent } from './feed/feed.component';
=======
import { PostsService } from './posts.service';
>>>>>>> f2f1db692faf80cdcc1403abfc5c13f219412bfc


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    FeedComponent
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
