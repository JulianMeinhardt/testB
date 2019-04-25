import { TemplateRef, AfterViewInit } from '@angular/core';
import { InputVerifierService } from './input-verifier.service';
export declare class CustomTemplateDirective implements AfterViewInit {
    templateRef: TemplateRef<any>;
    private inputVerifierService;
    property: string;
    constructor(templateRef: TemplateRef<any>, inputVerifierService: InputVerifierService);
    ngAfterViewInit(): void;
}
