import { Component, OnInit } from '@angular/core';
import { IonProgressBar, IonButton } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss'],
  imports: [IonButton, IonProgressBar]
})
export class FirstQuestionComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  public clickAnswer(): void {
    this.router.navigate(['/second']);
  }

}
