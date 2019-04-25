/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var InputVerifierService = /** @class */ (function () {
    function InputVerifierService() {
    }
    /**
     * @param {?} parent
     * @param {?} parentName
     * @param {?} property
     * @return {?}
     */
    InputVerifierService.prototype.exists = /**
     * @param {?} parent
     * @param {?} parentName
     * @param {?} property
     * @return {?}
     */
    function (parent, parentName, property) {
        if (!parent[property]) {
            throw new Error('Property "' + property + '"  is missing in ' + parentName + '!');
        }
    };
    /**
     * @param {?} parent
     * @param {?} parentName
     * @param {?} properties
     * @return {?}
     */
    InputVerifierService.prototype.allExist = /**
     * @param {?} parent
     * @param {?} parentName
     * @param {?} properties
     * @return {?}
     */
    function (parent, parentName, properties) {
        var e_1, _a;
        try {
            for (var properties_1 = tslib_1.__values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                var property = properties_1_1.value;
                this.exists(parent, parentName, property);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    InputVerifierService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    InputVerifierService.ctorParameters = function () { return []; };
    /** @nocollapse */ InputVerifierService.ngInjectableDef = i0.defineInjectable({ factory: function InputVerifierService_Factory() { return new InputVerifierService(); }, token: InputVerifierService, providedIn: "root" });
    return InputVerifierService;
}());
export { InputVerifierService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdmVyaWZpZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FkZXNzby1ncmlkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC12ZXJpZmllci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFLRTtJQUFnQixDQUFDOzs7Ozs7O0lBRWpCLHFDQUFNOzs7Ozs7SUFBTixVQUFPLE1BQVcsRUFBRSxVQUFrQixFQUFFLFFBQWdCO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxHQUFHLG1CQUFtQixHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7Ozs7Ozs7SUFFRCx1Q0FBUTs7Ozs7O0lBQVIsVUFBUyxNQUFXLEVBQUUsVUFBa0IsRUFBRSxVQUFvQjs7O1lBQzVELEtBQXVCLElBQUEsZUFBQSxpQkFBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7Z0JBQTlCLElBQU0sUUFBUSx1QkFBQTtnQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDOzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBSkQ7Q0FvQkMsQUFsQkQsSUFrQkM7U0FmWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFZlcmlmaWVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGV4aXN0cyhwYXJlbnQ6IGFueSwgcGFyZW50TmFtZTogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXBhcmVudFtwcm9wZXJ0eV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiAgaXMgbWlzc2luZyBpbiAnICsgcGFyZW50TmFtZSArICchJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGxFeGlzdChwYXJlbnQ6IGFueSwgcGFyZW50TmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBzdHJpbmdbXSkge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMuZXhpc3RzKHBhcmVudCwgcGFyZW50TmFtZSwgcHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=