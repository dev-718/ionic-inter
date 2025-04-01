import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { ModalController } from '@ionic/angular';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss'],
  imports: [IonProgressBar, IonButton],
  providers: [ModalController],
})
export class FourthQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  public async addBalance(): Promise<void> {
    this.interService.balance = Number(
      (this.interService.balance + 51.12).toFixed(2)
    );
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      componentProps: {
        amount: 51.12,
      },
    });
    modal.present();
    setTimeout(() => {
      modal.dismiss();
      this.router.navigate(['/fifth']);
    }, 3000);
  }
}
