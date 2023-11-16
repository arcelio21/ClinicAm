import { Component } from '@angular/core';
import { ClassButton } from 'src/app/shared/model/classButton.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  classBtn:ClassButton = ClassButton.SUCCESS;
}
