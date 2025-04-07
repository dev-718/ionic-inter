import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from "@ionic/angular/standalone";
import { InterService } from '../services/inter/inter.service';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-congratulations-modal',
  templateUrl: './congratulations-modal.component.html',
  styleUrls: ['./congratulations-modal.component.scss'],
  imports: [IonButton, BrazilNumberFormatPipe],
})
export class CongratulationsModalComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private interService: InterService
  ) { }

  ngOnInit() { }

  public closeModal(): void {
    this.interService.balance += 45;
    this.router.navigate(['/first']);
    setTimeout(() => {
      this.dialogService.closeAll();
    }, 100);
  }
}
