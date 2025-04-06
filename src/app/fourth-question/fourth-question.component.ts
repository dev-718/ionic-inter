import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss'],
  imports: [IonProgressBar, IonButton, BrazilNumberFormatPipe],
})
export class FourthQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {}

  public addBalance(): void {
    this.interService.balance += 51.12;
    this.dialogService.open(ConfirmModalComponent, {
      data: {
        amount: 51.12,
      },
    });
    setTimeout(() => {
      this.router.navigate(['/fifth']);
      this.dialogService.closeAll();
    }, 3000);
  }
}
