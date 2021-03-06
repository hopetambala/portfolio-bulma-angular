import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPage } from './pages/about/about';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgsRevealModule } from 'ngx-scrollreveal';



import * as $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { PCollaborationComponent } from './pages/p-collaboration/p-collaboration.component';
import { PCitizenComponent } from './pages/p-citizen/p-citizen.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PPuenteAppComponent } from './pages/p-puente-app/p-puente-app.component';
import { PPuenteDashComponent } from './pages/p-puente-dash/p-puente-dash.component';
import { PConsultingComponent } from './pages/p-consulting/p-consulting.component';
import { IQTNotetakingComponent } from './pages/iqt-note-taking/iqt-note-taking.component';
import { HealthStrongerComponent } from './pages/health-stronger/health-stronger.component';
import { TimelineComponent } from './components/timeline/timeline.component';
library.add(fas);


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutPage},
  { path: 'collaboration', component: PCollaborationComponent},
  { path: 'citizen', component: PCitizenComponent},
  { path: 'puenteApp',component:PPuenteAppComponent},
  { path: 'puenteDash',component:PPuenteDashComponent},
  { path: 'timeline', component:TimelineComponent},
  { path: 'consulting', component:PConsultingComponent},
  { path: 'notetaking', component:IQTNotetakingComponent},
  { path: 'healthStronger', component:HealthStrongerComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutPage,
    FooterComponent,
    PCollaborationComponent,
    PCitizenComponent,
    CarouselComponent,
    SlideshowComponent,
    PPuenteAppComponent,
    PPuenteDashComponent,
    PConsultingComponent,
    IQTNotetakingComponent,
    HealthStrongerComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    Ng2CarouselamosModule,
    SlideshowModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
