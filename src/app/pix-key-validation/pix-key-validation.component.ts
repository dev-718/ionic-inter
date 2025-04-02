import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-pix-key-validation',
  templateUrl: './pix-key-validation.component.html',
  styleUrls: ['./pix-key-validation.component.scss'],
  imports: [IonInput, IonButton]
})
export class PixKeyValidationComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  public validate(): void {
    this.router.navigate(['receive-balance']);
  }
}
