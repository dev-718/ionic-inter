import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonProgressBar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { InterService } from '../services/inter/inter.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss'],
  imports: [IonButton, IonProgressBar, BrazilNumberFormatPipe],
})
export class FirstQuestionComponent implements OnInit {
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  public balance: number = 0;

  constructor(
    private router: Router,
    private interService: InterService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.balance = this.interService.balance;
  }

  ngAfterViewInit(): void {
    this.audio.nativeElement.play();
  }

  public addBalance(): void {
    this.interService.balance += 36.53;
    this.dialogService.open(ConfirmModalComponent, {
      data: {
        amount: 36.53,
      },
    });
    setTimeout(() => {
      this.router.navigate(['/second']);
      setTimeout(() => {
        this.dialogService.closeAll();
      }, 100);
    }, 3000);
  }
}
