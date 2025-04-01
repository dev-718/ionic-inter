import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  imports: [IonIcon]
})
export class ConfirmModalComponent  implements OnInit {
  @Input() amount: number = 0;
  constructor() {
    addIcons({ checkmarkCircle });
  }

  ngOnInit() {}

}
