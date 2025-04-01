import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { ModalController } from '@ionic/angular';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss'],
  imports: [IonProgressBar, IonButton],
  providers: [ModalController],
})
export class SecondQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  public async addBalance(): Promise<void> {
    this.interService.balance += 24.33;
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      componentProps: {
        amount: 24.33,
      },
    });
    modal.present();
    setTimeout(() => {
      modal.dismiss();
      this.router.navigate(['/third']);
    }, 3000);
  }
}
