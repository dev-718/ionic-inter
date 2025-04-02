import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";
import { InterService } from '../services/inter/inter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss'],
  imports: [IonButton]
})
export class CompletionComponent  implements OnInit {

  constructor(
    private router: Router,
    public interService: InterService,
  ) { }

  ngOnInit() {}

  public registerPix(): void {
    this.router.navigate(['register-pix']);
  }

}
