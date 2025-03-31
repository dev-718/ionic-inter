import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonProgressBar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
  imports: [IonProgressBar, IonButton]
})
export class ThirdQuestionComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  public clickAnswer(): void {
    this.router.navigate(['/fourth']);
  }

}
