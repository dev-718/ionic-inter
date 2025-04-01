import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from "@ionic/angular";
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-congratulations-modal',
  templateUrl: './congratulations-modal.component.html',
  styleUrls: ['./congratulations-modal.component.scss'],
  imports: [IonButton]
})
export class CongratulationsModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() { }

  public closeModal(): void {
    this.modalCtrl.dismiss();
    this.router.navigate(['/first']);
  }
}
