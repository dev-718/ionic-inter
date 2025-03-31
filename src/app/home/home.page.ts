import { Component, inject, model } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CheckboxCustomEvent } from '@ionic/angular/standalone';
import { CongratulationsModalComponent } from '../congratulations-modal/congratulations-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule],
})

export class HomePage {
  canDismiss = false;

  presentingElement!: HTMLElement | null;

  private modalCtrl = inject(ModalController);

  async ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    const modal = await this.modalCtrl.create({
      component: CongratulationsModalComponent,
      cssClass: 'congratulations-modal'
    });
    modal.present();
  }

  onTermsChanged(event: CheckboxCustomEvent) {
    this.canDismiss = event.detail.checked;
  }
}