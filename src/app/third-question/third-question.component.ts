import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonProgressBar, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
  imports: [IonButton, IonProgressBar]
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
