import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InterService {
  public balance: number = 0;

  constructor() {}
}
