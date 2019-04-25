/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class InputVerifierService {
    constructor() { }
    /**
     * @param {?} parent
     * @param {?} parentName
     * @param {?} property
     * @return {?}
     */
    exists(parent, parentName, property) {
        if (!parent[property]) {
            throw new Error('Property "' + property + '"  is missing in ' + parentName + '!');
        }
    }
    /**
     * @param {?} parent
     * @param {?} parentName
     * @param {?} properties
     * @return {?}
     */
    allExist(parent, parentName, properties) {
        for (const property of properties) {
            this.exists(parent, parentName, property);
        }
    }
}
InputVerifierService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
InputVerifierService.ctorParameters = () => [];
/** @nocollapse */ InputVerifierService.ngInjectableDef = i0.defineInjectable({ factory: function InputVerifierService_Factory() { return new InputVerifierService(); }, token: InputVerifierService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdmVyaWZpZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FkZXNzby1ncmlkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC12ZXJpZmllci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLGdCQUFnQixDQUFDOzs7Ozs7O0lBRWpCLE1BQU0sQ0FBQyxNQUFXLEVBQUUsVUFBa0IsRUFBRSxRQUFnQjtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsR0FBRyxtQkFBbUIsR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbkY7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQVcsRUFBRSxVQUFrQixFQUFFLFVBQW9CO1FBQzVELEtBQUssTUFBTSxRQUFRLElBQUksVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFZlcmlmaWVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGV4aXN0cyhwYXJlbnQ6IGFueSwgcGFyZW50TmFtZTogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXBhcmVudFtwcm9wZXJ0eV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiAgaXMgbWlzc2luZyBpbiAnICsgcGFyZW50TmFtZSArICchJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGxFeGlzdChwYXJlbnQ6IGFueSwgcGFyZW50TmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBzdHJpbmdbXSkge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMuZXhpc3RzKHBhcmVudCwgcGFyZW50TmFtZSwgcHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=