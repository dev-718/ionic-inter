import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonProgressBar, IonButton } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { ModalController } from '@ionic/angular';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
  imports: [IonButton, IonProgressBar, BrazilNumberFormatPipe],
  providers: [ModalController],
})
export class ThirdQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  public async addBalance(): Promise<void> {
    this.interService.balance += 62.75;
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      componentProps: {
        amount: 62.75,
      },
    });
    modal.present();
    setTimeout(() => {
      modal.dismiss();
      this.router.navigate(['/fourth']);
    }, 3000);
  }
}
