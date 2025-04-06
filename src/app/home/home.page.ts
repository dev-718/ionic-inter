import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ValidationComponent } from '../validation/validation.component';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule],
})
export class HomePage {
  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.dialogService.open(ValidationComponent);
  }
}
