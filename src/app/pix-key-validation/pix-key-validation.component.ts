import { Component, OnInit } from '@angular/core';
import { IonButton, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-pix-key-validation',
  templateUrl: './pix-key-validation.component.html',
  styleUrls: ['./pix-key-validation.component.scss'],
  imports: [IonInput, IonButton]
})
export class PixKeyValidationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  private validate(): void {

  }
}
