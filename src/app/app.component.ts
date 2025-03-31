import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, HeaderComponent],
})
export class AppComponent {
  constructor() {}
}
