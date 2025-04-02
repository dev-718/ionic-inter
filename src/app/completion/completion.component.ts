import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";
import { InterService } from '../services/inter/inter.service';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss'],
  imports: [IonButton]
})
export class CompletionComponent  implements OnInit {

  constructor(
    public interService: InterService
  ) { }

  ngOnInit() {}

}
