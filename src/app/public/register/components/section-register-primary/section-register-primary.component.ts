import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section-register-primary',
  templateUrl: './section-register-primary.component.html',
  styleUrls: ['./section-register-primary.component.css'],
})
export class SectionRegisterPrimaryComponent implements OnInit {
  @Output()
  nextForm = new EventEmitter<number>();

  @Input()
  control!: FormGroup<{
    idencard: FormControl<string | null>;
    name: FormControl<string | null>;
    lastName: FormControl<string | null>;
    contact:FormControl<string|null>;
  }>;

  constructor() {}

  ngOnInit() {}

  nextFormSection() {

    if(this.control.valid){
      this.nextForm.emit(2);
    }
  }
}
