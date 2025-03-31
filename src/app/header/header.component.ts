import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
