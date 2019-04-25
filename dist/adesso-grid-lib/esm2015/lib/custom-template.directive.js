/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from '@angular/core';
import { InputVerifierService } from './input-verifier.service';
export class CustomTemplateDirective {
    /**
     * @param {?} templateRef
     * @param {?} inputVerifierService
     */
    constructor(templateRef, inputVerifierService) {
        this.templateRef = templateRef;
        this.inputVerifierService = inputVerifierService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.inputVerifierService.exists(this, 'CustomTemplateDirective', 'property');
    }
}
CustomTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libCustomTemplate]'
            },] }
];
/** @nocollapse */
CustomTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: InputVerifierService }
];
CustomTemplateDirective.propDecorators = {
    property: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FkZXNzby1ncmlkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS2hFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBSWxDLFlBQ1MsV0FBNkIsRUFDNUIsb0JBQTBDO1FBRDNDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2hELENBQUM7Ozs7SUFFTCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7Ozs7WUFMMEIsV0FBVztZQUM3QixvQkFBb0I7Ozt1QkFPMUIsS0FBSzs7OztJQUFOLDJDQUEwQjs7SUFHeEIsOENBQW9DOzs7OztJQUNwQyx1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dFZlcmlmaWVyU2VydmljZSB9IGZyb20gJy4vaW5wdXQtdmVyaWZpZXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tsaWJDdXN0b21UZW1wbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21UZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBwcm9wZXJ0eTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgaW5wdXRWZXJpZmllclNlcnZpY2U6IElucHV0VmVyaWZpZXJTZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWZXJpZmllclNlcnZpY2UuZXhpc3RzKHRoaXMsICdDdXN0b21UZW1wbGF0ZURpcmVjdGl2ZScsICdwcm9wZXJ0eScpO1xyXG4gIH1cclxufVxyXG4iXX0=