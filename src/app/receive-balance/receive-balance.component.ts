import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle } from 'ionicons/icons';
import { InterService } from '../services/inter/inter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-balance',
  templateUrl: './receive-balance.component.html',
  styleUrls: ['./receive-balance.component.scss'],
  imports: [IonButton, IonIcon]
})
export class ReceiveBalanceComponent implements OnInit {
  constructor(
    private router: Router,
    public interService: InterService
  ) {
    addIcons({ checkmarkCircle });
  }

  ngOnInit() {}

  public receive(): void {
    this.router.navigate(['attention']);
  }
}
