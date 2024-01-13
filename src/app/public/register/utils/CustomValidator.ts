import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateDateLessThanToday(
  control: AbstractControl
): ValidationErrors | null {
  const date = new Date(control.value);
  const today = new Date();

  if (date > today) {
    return {
      dateLessThanToday: true,
    };
  }

  return null;
}