import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LetsgoComponent } from './letsgo/letsgo.component';
import { FeatureComponent } from './feature/feature.component';
import { VideoComponent } from './video/video.component';
import { TeamComponent } from './team/team.component';
import { WhyComponent } from './why/why.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    LetsgoComponent,
    FeatureComponent,
    VideoComponent,
    TeamComponent,
    WhyComponent,
    WorkComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }