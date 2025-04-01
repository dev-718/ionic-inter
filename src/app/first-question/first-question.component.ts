import { Component, OnInit } from '@angular/core';
import { IonProgressBar, IonButton } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { thumbsUp, thumbsUpOutline, thumbsDown, thumbsDownOutline, help } from 'ionicons/icons';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss'],
  imports: [IonButton, IonProgressBar]
})
export class FirstQuestionComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    addIcons({ thumbsUp, thumbsUpOutline, thumbsDown, thumbsDownOutline, help });
  }

  ngOnInit() { }

  public clickAnswer(): void {
    this.router.navigate(['/second']);
  }

}
