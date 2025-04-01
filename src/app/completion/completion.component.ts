import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss'],
  imports: [IonButton]
})
export class CompletionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
