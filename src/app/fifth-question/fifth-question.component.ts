import { Component, OnInit } from '@angular/core';
import { IonProgressBar, IonButton, IonTextarea  } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss'],
  imports: [IonButton, IonProgressBar, IonTextarea ]
})
export class FifthQuestionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public complete(): void {
    this.router.navigate(['/completion']);
  }

}
