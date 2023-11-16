import { Component, Input } from '@angular/core';

/**
 * Docs
 * @link https://www.notion.so/CMP-Button-Redirect-bd8cfad70d27484292486aab34099736
 */
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
