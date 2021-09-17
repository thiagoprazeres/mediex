import { Component } from '@angular/core';
import 'bootstrap';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faExternalLinkAlt = faExternalLinkAlt;
  options: AnimationOptions = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_ioxlu1zt.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
