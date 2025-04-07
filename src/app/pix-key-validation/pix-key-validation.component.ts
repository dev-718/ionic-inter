import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaskitoDirective } from '@maskito/angular';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonInput } from '@ionic/angular/standalone';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { LoadingComponent } from '../loading/loading.component';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-pix-key-validation',
  templateUrl: './pix-key-validation.component.html',
  styleUrls: ['./pix-key-validation.component.scss'],
  imports: [
    IonInput,
    IonButton,
    CommonModule,
    ReactiveFormsModule,
    MaskitoDirective,
  ],
})
export class PixKeyValidationComponent implements OnInit {
  public validationFormGroup!: FormGroup;
  public cpfMask: MaskitoOptions = {
    mask: [
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ],
  };
  public phoneMask: MaskitoOptions = {
    mask: [
      '(',
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  };
  readonly maskPredicate: MaskitoElementPredicate = async (element) =>
    (element as HTMLIonInputElement).getInputElement();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.validationFormGroup = this.fb.group({
      type: ['cpf', [Validators.required]],
      cpf: [
        null,
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      phone: [null, [Validators.pattern(/^\(\d{2}\) \d{4}-\d{4}$/)]],
    });
  }

  public async validate(): Promise<void> {
    this.dialogService.open(LoadingComponent);
    setTimeout(() => {
      this.router.navigate(['receive-balance']);
      setTimeout(() => {
        this.dialogService.closeAll();
      }, 100);
    }, 5000);
  }

  public setType(val: 'cpf' | 'phone'): void {
    this.validationFormGroup.controls['type'].setValue(val);
    if (val === 'cpf') {
      this.validationFormGroup.controls['cpf'].addValidators([
        Validators.required,
      ]);
      this.validationFormGroup.controls['phone'].removeValidators([
        Validators.required,
      ]);
    } else {
      this.validationFormGroup.controls['cpf'].removeValidators([
        Validators.required,
      ]);
      this.validationFormGroup.controls['phone'].addValidators([
        Validators.required,
      ]);
    }
    this.validationFormGroup.controls['cpf'].updateValueAndValidity();
    this.validationFormGroup.controls['phone'].updateValueAndValidity();
  }
}
