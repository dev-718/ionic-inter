import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss'],
  imports: [IonProgressBar, IonButton, BrazilNumberFormatPipe],
})
export class SecondQuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private interService: InterService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {}

  public addBalance(): void {
    this.interService.balance += 24.33;
    this.dialogService.open(ConfirmModalComponent, {
      data: {
        amount: 24.33,
      },
    });
    setTimeout(() => {
      this.router.navigate(['/third']);
      this.dialogService.closeAll();
    }, 3000);
  }
}
