import { Component } from '@angular/core';
import { IonApp, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonButton, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
