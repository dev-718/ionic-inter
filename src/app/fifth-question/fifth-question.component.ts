import { Component, OnInit } from '@angular/core';
import {
  IonProgressBar,
  IonButton,
  IonTextarea,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { InterService } from '../services/inter/inter.service';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss'],
  imports: [IonButton, IonProgressBar, IonTextarea],
  providers: [ModalController],
})
export class FifthQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private interService: InterService
  ) {}

  ngOnInit() {}

  public async complete(): Promise<void> {
    this.interService.balance += 127.54;
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      componentProps: {
        amount: 127.54,
      },
    });
    modal.present();
    setTimeout(() => {
      modal.dismiss();
      this.router.navigate(['/completion']);
    }, 3000);
  }
}
