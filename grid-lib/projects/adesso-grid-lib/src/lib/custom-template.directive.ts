import { Directive, Input, TemplateRef, AfterViewInit } from '@angular/core';
import { InputVerifierService } from './input-verifier.service';

@Directive({
  selector: '[libCustomTemplate]'
})
export class CustomTemplateDirective implements AfterViewInit {

  @Input() property: string;

  constructor(
    public templateRef: TemplateRef<any>,
    private inputVerifierService: InputVerifierService,
  ) { }

  ngAfterViewInit(): void {
    this.inputVerifierService.exists(this, 'CustomTemplateDirective', 'property');
  }
}
