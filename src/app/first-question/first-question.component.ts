import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonProgressBar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { InterService } from '../services/inter/inter.service';
import { ModalController } from '@ionic/angular';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss'],
  imports: [IonButton, IonProgressBar],
  providers: [ModalController]
})
export class FirstQuestionComponent implements OnInit {
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  public balance: number = 0;

  constructor(
    private router: Router,
    private interService: InterService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.balance = this.interService.balance;
  }

  ngAfterViewInit(): void {
    this.audio.nativeElement.play();
  }

  public async addBalance(): Promise<void> {
    this.interService.balance += 36.53;
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      componentProps: {
        amount: 36.53
      }
    });
    modal.present();
    setTimeout(() => {
      modal.dismiss();
      this.router.navigate(['/second']);
    }, 3000);
  }
}
