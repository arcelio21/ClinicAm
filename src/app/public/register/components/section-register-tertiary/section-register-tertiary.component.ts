import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section-register-tertiary',
  templateUrl: './section-register-tertiary.component.html',
  styleUrls: ['./section-register-tertiary.component.css'],
})
export class SectionRegisterTertiaryComponent implements OnInit {
  @Output()
  nextForm = new EventEmitter<number>();

  @Output()
  sendData = new EventEmitter<void>();

  @Input()
  control!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
    birthday: FormControl<string | null>;
  }>;

  constructor() {}

  ngOnInit() {}

  prevFormSection() {
    this.nextForm.emit(2);
  }
}
