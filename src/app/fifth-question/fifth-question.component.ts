import { Component, OnInit } from '@angular/core';
import {
  IonProgressBar,
  IonButton,
  IonTextarea,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { InterService } from '../services/inter/inter.service';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss'],
  imports: [IonButton, IonProgressBar, IonTextarea, BrazilNumberFormatPipe],
})
export class FifthQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {}

  public async complete(): Promise<void> {
    this.interService.balance += 127.54;
    this.dialogService.open(ConfirmModalComponent, {
      data: {
        amount: 127.54,
      },
    });
    setTimeout(() => {
      this.router.navigate(['/completion']);
      setTimeout(() => {
        this.dialogService.closeAll();
      }, 100);
    }, 3000);
  }
}
