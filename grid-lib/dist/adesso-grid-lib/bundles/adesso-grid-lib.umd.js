(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('adesso-grid-lib', ['exports', '@angular/common', '@angular/material', '@angular/core'], factory) :
    (factory((global['adesso-grid-lib'] = {}),global.ng.common,global.ng.material,global.ng.core));
}(this, (function (exports,common,material,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                        var property = properties_1_1.value;
                        this.exists(parent, parentName, property);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return))
                            _a.call(properties_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        InputVerifierService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        InputVerifierService.ctorParameters = function () { return []; };
        /** @nocollapse */ InputVerifierService.ngInjectableDef = i0.defineInjectable({ factory: function InputVerifierService_Factory() { return new InputVerifierService(); }, token: InputVerifierService, providedIn: "root" });
        return InputVerifierService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Directive, args: [{
                        selector: '[libCustomTemplate]'
                    },] }
        ];
        /** @nocollapse */
        CustomTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef },
                { type: InputVerifierService }
            ];
        };
        CustomTemplateDirective.propDecorators = {
            property: [{ type: i0.Input }]
        };
        return CustomTemplateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabbedGridComponent = /** @class */ (function () {
        function TabbedGridComponent(inputVerifierService) {
            this.inputVerifierService = inputVerifierService;
            this.tabs = [];
            this.selectedTabIndex = 0;
            this.customTemplateRefs = {};
        }
        /**
         * @return {?}
         */
        TabbedGridComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.inputVerifierService.allExist(this, 'TabbedGridComponent', [
                    'computeTabLabel',
                    'tableDefinition',
                    'detailsTemplate',
                ]);
                this.customTemplateDirectives.forEach(( /**
                 * @param {?} t
                 * @return {?}
                 */function (t) {
                    if (_this.customTemplateRefs[t.property]) {
                        throw new Error('Duplicate custom template definition found for ' + t.property);
                    }
                    _this.customTemplateRefs[t.property] = t.templateRef;
                }));
            };
        /**
         * @param {?} row
         * @return {?}
         */
        TabbedGridComponent.prototype.rowClick = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                /** @type {?} */
                var tabNumber = this.tabs.findIndex(( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) { return e.row.id === row.id; }));
                if (tabNumber === -1) {
                    this.tabs.push({ label: this.computeTabLabel(row.data), row: row });
                    this.selectedTabIndex = this.tabs.length;
                }
                else {
                    this.selectedTabIndex = tabNumber + 1;
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TabbedGridComponent.prototype.closeTab = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.tabs.splice(index, 1);
                if (index === this.selectedTabIndex - 1) {
                    this.selectedTabIndex = 0;
                }
            };
        /**
         * @param {?} property
         * @return {?}
         */
        TabbedGridComponent.prototype.getCustomTemplate = /**
         * @param {?} property
         * @return {?}
         */
            function (property) {
                /** @type {?} */
                var customTemplateRef = this.customTemplateRefs[property];
                if (!customTemplateRef) {
                    throw new Error('Could not find custom template definition for ' + property);
                }
                return customTemplateRef;
            };
        Object.defineProperty(TabbedGridComponent.prototype, "tableData", {
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
                if (!data) {
                    this.dataSource = null;
                    return;
                }
                /** @type {?} */
                var id = 0;
                /** @type {?} */
                var rows = data.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (v) { return ({ data: v, id: id++ }); }));
                this.dataSource = new material.MatTableDataSource(rows);
                this.dataSource.sortingDataAccessor = ( /**
                 * @param {?} row
                 * @param {?} property
                 * @return {?}
                 */function (row, property) {
                    return row.data[property];
                });
                this.dataSource.sort = this.sort;
            },
            enumerable: true,
            configurable: true
        });
        TabbedGridComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tabbed-grid',
                        template: "<mat-tab-group [(selectedIndex)]=\"selectedTabIndex\">\r\n  <mat-tab label=\"Overview\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"full-width\">\r\n\r\n      <ng-container *ngFor=\"let column of tableDefinition.columns\">\r\n        <ng-container matColumnDef=\"{{ column.property }}\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column.label }}</th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <ng-container *ngIf=\"column.customContent\">\r\n              <ng-container *ngTemplateOutlet=\"getCustomTemplate(column.property); context: { $implicit: row.data }\">\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!column.customContent\">\r\n              <ng-container *ngIf=\"column.type == 'TEXT' || column.type == 'NUMBER'\">\r\n                {{ row.data[column.property] }}\r\n              </ng-container>\r\n              <ng-container *ngIf=\"column.type == 'DATE'\">\r\n                {{ row.data[column.property] | date: 'medium'  }}\r\n              </ng-container>\r\n            </ng-container>\r\n          </td>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"tableDefinition.displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: tableDefinition.displayedColumns\" class=\"table-row\" (click)=\"rowClick(row)\"></tr>\r\n    </table>\r\n  </mat-tab>\r\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\">\r\n    <ng-template mat-tab-label>\r\n      {{ tab.label }}\r\n      <span class=\"close-tab\" (click)=\"closeTab(index)\">X</span>\r\n    </ng-template>\r\n\r\n    <ng-container *ngTemplateOutlet=\"detailsTemplate; context: { $implicit: tab.row.data }\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>",
                        styles: [".full-width{width:100%}.table-row{cursor:pointer}.close-tab{cursor:pointer;color:red;position:absolute;right:10px;top:16px}"]
                    }] }
        ];
        /** @nocollapse */
        TabbedGridComponent.ctorParameters = function () {
            return [
                { type: InputVerifierService }
            ];
        };
        TabbedGridComponent.propDecorators = {
            computeTabLabel: [{ type: i0.Input }],
            tableDefinition: [{ type: i0.Input }],
            displayedColumns: [{ type: i0.Input }],
            detailsTemplate: [{ type: i0.ContentChild, args: ['detailsTemplate',] }],
            customTemplateDirectives: [{ type: i0.ContentChildren, args: [CustomTemplateDirective,] }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            tableData: [{ type: i0.Input }]
        };
        return TabbedGridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdessoAngularLibModule = /** @class */ (function () {
        function AdessoAngularLibModule() {
        }
        AdessoAngularLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatSortModule,
                            material.MatTabsModule,
                            material.MatTableModule,
                        ],
                        declarations: [
                            TabbedGridComponent,
                            CustomTemplateDirective,
                        ],
                        exports: [
                            TabbedGridComponent,
                            CustomTemplateDirective,
                        ]
                    },] }
        ];
        return AdessoAngularLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ColumnType = {
        TEXT: 'TEXT',
        DATE: 'DATE',
        NUMBER: 'NUMBER',
        ENUM: 'ENUM',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AdessoAngularLibModule = AdessoAngularLibModule;
    exports.TabbedGridComponent = TabbedGridComponent;
    exports.ColumnType = ColumnType;
    exports.ɵa = CustomTemplateDirective;
    exports.ɵb = InputVerifierService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=adesso-grid-lib.umd.js.map