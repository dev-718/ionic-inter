import { Component, OnInit } from '@angular/core';
import { IonButton, IonProgressBar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss'],
  imports: [IonProgressBar, IonButton]
})
export class SecondQuestionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
