import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'show-errors',
  template: `
    <span class="error-wrapper" *ngIf="shouldShowErrors()">
      <span *ngFor="let error of listOfErrors()" class="errors">{{error}}</span>
    </span>
  `,
  styles: [`
    .error-wrapper {
      padding: 11px;
    }
    .error-wrapper > .errors {
        color:red;
        list-style-type:none;
    }
    .error-wrapper > .errors:before {
        font-weight: bold;
        margin-right: 5px;
        content:"!";
    }
  `]
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'digit': (params) => params.message,
    'uppercase': (params) => params.message,
    'lowercase': (params) => params.message,
    'minLength': (params) => params.message,
    'maxLength': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
