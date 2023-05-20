import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-angular-progressbar';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  public animation: AnimationModel = { enable: true, duration: 2000, delay: 0 };
  public value: number = 40;
}
