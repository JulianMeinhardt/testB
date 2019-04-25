/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from '@angular/core';
import { InputVerifierService } from './input-verifier.service';
var CustomTemplateDirective = /** @class */ (function () {
    function CustomTemplateDirective(templateRef, inputVerifierService) {
        this.templateRef = templateRef;
        this.inputVerifierService = inputVerifierService;
    }
    /**
     * @return {?}
     */
    CustomTemplateDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.inputVerifierService.exists(this, 'CustomTemplateDirective', 'property');
    };
    CustomTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libCustomTemplate]'
                },] }
    ];
    /** @nocollapse */
    CustomTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: InputVerifierService }
    ]; };
    CustomTemplateDirective.propDecorators = {
        property: [{ type: Input }]
    };
    return CustomTemplateDirective;
}());
export { CustomTemplateDirective };
if (false) {
    /** @type {?} */
    CustomTemplateDirective.prototype.property;
    /** @type {?} */
    CustomTemplateDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    CustomTemplateDirective.prototype.inputVerifierService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FkZXNzby1ncmlkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBT0UsaUNBQ1MsV0FBNkIsRUFDNUIsb0JBQTBDO1FBRDNDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2hELENBQUM7Ozs7SUFFTCxpREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7Z0JBTDBCLFdBQVc7Z0JBQzdCLG9CQUFvQjs7OzJCQU8xQixLQUFLOztJQVVSLDhCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksdUJBQXVCOzs7SUFFbEMsMkNBQTBCOztJQUd4Qiw4Q0FBb0M7Ozs7O0lBQ3BDLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0VmVyaWZpZXJTZXJ2aWNlIH0gZnJvbSAnLi9pbnB1dC12ZXJpZmllci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2xpYkN1c3RvbVRlbXBsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHByb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBpbnB1dFZlcmlmaWVyU2VydmljZTogSW5wdXRWZXJpZmllclNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dFZlcmlmaWVyU2VydmljZS5leGlzdHModGhpcywgJ0N1c3RvbVRlbXBsYXRlRGlyZWN0aXZlJywgJ3Byb3BlcnR5Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==