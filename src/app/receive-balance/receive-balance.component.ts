import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle } from 'ionicons/icons';
import { InterService } from '../services/inter/inter.service';

@Component({
  selector: 'app-receive-balance',
  templateUrl: './receive-balance.component.html',
  styleUrls: ['./receive-balance.component.scss'],
  imports: [IonButton, IonIcon]
})
export class ReceiveBalanceComponent implements OnInit {
  constructor(
    public interService: InterService
  ) {
    addIcons({ checkmarkCircle });
  }

  ngOnInit() {}
}
