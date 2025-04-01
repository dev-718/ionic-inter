import { Component, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CongratulationsModalComponent } from '../congratulations-modal/congratulations-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule],
})

export class HomePage {
  private modalCtrl = inject(ModalController);

  async ngOnInit() {
    const modal = await this.modalCtrl.create({
      component: CongratulationsModalComponent,
      cssClass: 'congratulations-modal'
    });
    modal.present();
  }
}