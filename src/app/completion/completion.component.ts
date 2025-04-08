import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";
import { InterService } from '../services/inter/inter.service';
import { Router } from '@angular/router';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss'],
  imports: [IonButton, BrazilNumberFormatPipe],
})
export class CompletionComponent  implements OnInit {

  constructor(
    private router: Router,
    public interService: InterService,
  ) { }

  ngOnInit() {}

  public registerPix(): void {
    this.router.navigateByUrl('/register-pix', { replaceUrl: true });
  }

}
