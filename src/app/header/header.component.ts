import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { InterService } from '../services/inter/inter.service';
import { BrazilNumberFormatPipe } from '../brazil-number-format.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton, BrazilNumberFormatPipe]
})
export class HeaderComponent implements OnInit {

  constructor(
    public interService: InterService
  ) { }

  ngOnInit() { }

}
