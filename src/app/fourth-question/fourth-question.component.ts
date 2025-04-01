import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonProgressBar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss'],
  imports: [IonProgressBar, IonButton]
})
export class FourthQuestionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public clickAnswer(): void {
    this.router.navigate(['/fifth']);
  }

}
