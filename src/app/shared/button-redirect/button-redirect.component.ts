import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-redirect',
  templateUrl: './button-redirect.component.html',
  styleUrls: ['./button-redirect.component.css'],
})
export class ButtonRedirectComponent {
  @Input()
  value: string = '';

  @Input()
  classCss: string = '';

  @Input()
  pathLink:string = '';
}
