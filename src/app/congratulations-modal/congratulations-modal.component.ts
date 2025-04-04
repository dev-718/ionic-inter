import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from "@ionic/angular";
import { IonButton } from "@ionic/angular/standalone";
import { InterService } from '../services/inter/inter.service';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';

@Component({
  selector: 'app-congratulations-modal',
  templateUrl: './congratulations-modal.component.html',
  styleUrls: ['./congratulations-modal.component.scss'],
  imports: [IonButton, BrazilNumberFormatPipe],
  providers: [ModalController]
})
export class CongratulationsModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private interService: InterService
  ) { }

  ngOnInit() { }

  public closeModal(): void {
    this.interService.balance += 45;
    this.modalCtrl.dismiss();
    this.router.navigate(['/first']);
  }
}
