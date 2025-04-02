import { Component, OnInit } from '@angular/core';
import { IonButton, IonInput } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { CongratulationsModalComponent } from '../congratulations-modal/congratulations-modal.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  imports: [IonInput, IonButton],
})
export class ValidationComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  public async seeValidation(): Promise<void> {
    this.modalCtrl.dismiss();
    const loadingModal = await this.modalCtrl.create({
      component: LoadingComponent,
    });
    loadingModal.present();
    const congratulationsModal = await this.modalCtrl.create({
      component: CongratulationsModalComponent,
    });
    setTimeout(() => {
      loadingModal.dismiss();
      congratulationsModal.present();
    }, 8000);
  }
}
