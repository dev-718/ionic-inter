import { Component, OnInit } from '@angular/core';
import { IonButton, IonInput } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { CongratulationsModalComponent } from '../congratulations-modal/congratulations-modal.component';
import { LoadingComponent } from '../loading/loading.component';
import {MaskitoOptions, MaskitoElementPredicate} from '@maskito/core';
import {MaskitoDirective} from '@maskito/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  imports: [IonInput, IonButton, MaskitoDirective, ReactiveFormsModule],
})
export class ValidationComponent implements OnInit {
  readonly maskPredicate: MaskitoElementPredicate = async element => (element as HTMLIonInputElement).getInputElement();
  public cpfMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]
  };
  public cpfFormGroup!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.cpfFormGroup = this.fb.group({
      cpf: [null, [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]]
    })
  }

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
