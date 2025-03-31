import { Component, OnInit } from '@angular/core';
import { IonProgressBar, IonButton } from "@ionic/angular/standalone";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss'],
  imports: [IonButton, IonProgressBar, HeaderComponent]
})
export class FirstQuestionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
