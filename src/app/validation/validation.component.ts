import { DialogService } from '@ngneat/dialog';
import { Component, OnInit } from '@angular/core';
import { IonButton, IonInput } from '@ionic/angular/standalone';
import { CongratulationsModalComponent } from '../congratulations-modal/congratulations-modal.component';
import { LoadingComponent } from '../loading/loading.component';
import {MaskitoOptions, MaskitoElementPredicate} from '@maskito/core';
import {MaskitoDirective} from '@maskito/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  imports: [IonInput, IonButton, MaskitoDirective, ReactiveFormsModule, CommonModule],
})
export class ValidationComponent implements OnInit {
  readonly maskPredicate: MaskitoElementPredicate = async element => (element as HTMLIonInputElement).getInputElement();
  public cpfMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]
  };
  public cpfFormGroup!: FormGroup;
  public loading: boolean = true;

  constructor(
    private dialogService: DialogService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.cpfFormGroup = this.fb.group({
      cpf: [null, [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]]
    })
    setTimeout(() => {
      this.loading = false;
    }, 2000); 
  }

  public seeValidation(): void {
    this.dialogService.closeAll();
    this.dialogService.open(LoadingComponent);
    setTimeout(() => {
      this.dialogService.closeAll();
      this.dialogService.open(CongratulationsModalComponent);
    }, 5000);
  }
}
