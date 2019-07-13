import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHander } from './common/app-error-handler';
import { GithubConsumerComponent } from './github-consumer/github-consumer.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
 
@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    CourseFormComponent,
    SignupFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    GithubConsumerComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forChild([
      {path: '', component:HomeComponent},
      {path: 'followers/:id/:username', component:ProfileComponent},
      {path: 'followers', component:GithubConsumerComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [PostService, {
    provide: ErrorHandler,
    useClass: AppErrorHander
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
