import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as String).indexOf(" ") >= 0)
            return { cannotContainSpace: true };

        return null;
    }

    // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    //     if (control.value === 'Harris')
    //         return { shouldBeUnique: true };

    //     return null;
    // }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Harris') {
                    console.log('---matched--');
                    resolve({shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 3000);
        });

    }



}