import { Component } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LetsgoComponent } from './letsgo/letsgo.component';
import { FeatureComponent } from './feature/feature.component';
import { VideoComponent } from './video/video.component';
import { WhyComponent } from './why/why.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/bootstrap/css/bootstrap.min.css', '../styles/styles.css']
})
export class AppComponent {
  title = 'app';
}