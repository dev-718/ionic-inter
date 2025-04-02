import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss'],
  imports: [IonButton]
})
export class AttentionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
