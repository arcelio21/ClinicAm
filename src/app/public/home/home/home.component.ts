import { Component } from '@angular/core';
import { ClassButton } from 'src/app/shared/model/classButton.model';

/**
 * Documentation
 * @link https://www.notion.so/CMP-Home-70da32ae67b64cd68d68eb8133bcd0b5
 */
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  classBtn: ClassButton = ClassButton.SUCCESS;
  clssBtnRegister:ClassButton = ClassButton.SUCCESS_OUTLINE;
}
