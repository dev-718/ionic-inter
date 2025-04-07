import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonProgressBar, IonButton } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
  imports: [IonButton, IonProgressBar, BrazilNumberFormatPipe],
})
export class ThirdQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {}

  public addBalance(): void {
    this.interService.balance += 62.75;
    this.dialogService.open(ConfirmModalComponent, {
      data: {
        amount: 62.75,
      },
    });
    setTimeout(() => {
      this.router.navigate(['/fourth']);
      setTimeout(() => {
        this.dialogService.closeAll();
      }, 100);
    }, 3000);
  }
}
