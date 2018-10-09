import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static upperCase(c: FormControl): ValidationErrors {
        const upperCaseExist = /(?=.*?[A-Z])/.test(c.value);
        const message = {
            'uppercase': {
                'message': '1 Uppercase letter'
            }
        };
        return upperCaseExist ? null : message;
    }

    static lowerCase(c: FormControl): ValidationErrors {
        const lowerCaseExist = /(?=.*?[a-z])/.test(c.value);
        const message = {
            'lowercase': {
                'message': '1 Lowercase letter'
            }
        };
        return lowerCaseExist ? null : message;
    }

    static digit(c: FormControl): ValidationErrors {
        const digitExist = /(?=.*?[0-9])/.test(c.value);
        const message = {
            'digit': {
                'message': '1 Number'
            }
        };
        return digitExist ? null : message;
    }

    static minLength(c: FormControl): ValidationErrors {
        const minLength = /^.{8,}$/.test(c.value);
        const message = {
            'minLength': {
                'message': 'More than 8 characters'
            }
        };
        return minLength ? null : message;
    }

    static maxLength(c: FormControl): ValidationErrors {
        const maxLength = /^.{3,50}$/.test(c.value);
        const message = {
            'maxLength': {
                'message': 'Between 3 and 50 characters'
            }
        };
        return maxLength ? null : message;
    }

    static maxLengthTextArea(c: FormControl): ValidationErrors {
        const maxLength = /^.{3,500}$/.test(c.value);
        const message = {
            'maxLength': {
                'message': 'Between 3 and 500 characters'
            }
        };
        return maxLength ? null : message;
    }
}
