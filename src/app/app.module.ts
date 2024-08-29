import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Ensure this is imported

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, AboutComponent, ProjectsComponent, ContactComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent
  ],
  exports: [
    HeaderComponent, AboutComponent, ProjectsComponent, ContactComponent, HomeComponent, RouterModule
  ]
})
export class AppModule { }
