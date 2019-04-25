import { CommonModule } from '@angular/common';
import { MatSort, MatTableDataSource, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';
import { Injectable, Directive, Input, TemplateRef, Component, ContentChild, ContentChildren, ViewChild, defineInjectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputVerifierService {
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
/** @nocollapse */ InputVerifierService.ngInjectableDef = defineInjectable({ factory: function InputVerifierService_Factory() { return new InputVerifierService(); }, token: InputVerifierService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomTemplateDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabbedGridComponent {
    /**
     * @param {?} inputVerifierService
     */
    constructor(inputVerifierService) {
        this.inputVerifierService = inputVerifierService;
        this.tabs = [];
        this.selectedTabIndex = 0;
        this.customTemplateRefs = {};
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.inputVerifierService.allExist(this, 'TabbedGridComponent', [
            'computeTabLabel',
            'tableDefinition',
            'detailsTemplate',
        ]);
        this.customTemplateDirectives.forEach((/**
         * @param {?} t
         * @return {?}
         */
        (t) => {
            if (this.customTemplateRefs[t.property]) {
                throw new Error('Duplicate custom template definition found for ' + t.property);
            }
            this.customTemplateRefs[t.property] = t.templateRef;
        }));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    rowClick(row) {
        /** @type {?} */
        const tabNumber = this.tabs.findIndex((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.row.id === row.id));
        if (tabNumber === -1) {
            this.tabs.push({ label: this.computeTabLabel(row.data), row });
            this.selectedTabIndex = this.tabs.length;
        }
        else {
            this.selectedTabIndex = tabNumber + 1;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    closeTab(index) {
        this.tabs.splice(index, 1);
        if (index === this.selectedTabIndex - 1) {
            this.selectedTabIndex = 0;
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    getCustomTemplate(property) {
        /** @type {?} */
        const customTemplateRef = this.customTemplateRefs[property];
        if (!customTemplateRef) {
            throw new Error('Could not find custom template definition for ' + property);
        }
        return customTemplateRef;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set tableData(data) {
        if (!data) {
            this.dataSource = null;
            return;
        }
        /** @type {?} */
        let id = 0;
        /** @type {?} */
        const rows = data.map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => ({ data: v, id: id++ })));
        this.dataSource = new MatTableDataSource(rows);
        this.dataSource.sortingDataAccessor = (/**
         * @param {?} row
         * @param {?} property
         * @return {?}
         */
        (row, property) => {
            return row.data[property];
        });
        this.dataSource.sort = this.sort;
    }
}
TabbedGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-tabbed-grid',
                template: "<mat-tab-group [(selectedIndex)]=\"selectedTabIndex\">\r\n  <mat-tab label=\"Overview\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"full-width\">\r\n\r\n      <ng-container *ngFor=\"let column of tableDefinition.columns\">\r\n        <ng-container matColumnDef=\"{{ column.property }}\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column.label }}</th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <ng-container *ngIf=\"column.customContent\">\r\n              <ng-container *ngTemplateOutlet=\"getCustomTemplate(column.property); context: { $implicit: row.data }\">\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!column.customContent\">\r\n              <ng-container *ngIf=\"column.type == 'TEXT' || column.type == 'NUMBER'\">\r\n                {{ row.data[column.property] }}\r\n              </ng-container>\r\n              <ng-container *ngIf=\"column.type == 'DATE'\">\r\n                {{ row.data[column.property] | date: 'medium'  }}\r\n              </ng-container>\r\n            </ng-container>\r\n          </td>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"tableDefinition.displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: tableDefinition.displayedColumns\" class=\"table-row\" (click)=\"rowClick(row)\"></tr>\r\n    </table>\r\n  </mat-tab>\r\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\">\r\n    <ng-template mat-tab-label>\r\n      {{ tab.label }}\r\n      <span class=\"close-tab\" (click)=\"closeTab(index)\">X</span>\r\n    </ng-template>\r\n\r\n    <ng-container *ngTemplateOutlet=\"detailsTemplate; context: { $implicit: tab.row.data }\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>",
                styles: [".full-width{width:100%}.table-row{cursor:pointer}.close-tab{cursor:pointer;color:red;position:absolute;right:10px;top:16px}"]
            }] }
];
/** @nocollapse */
TabbedGridComponent.ctorParameters = () => [
    { type: InputVerifierService }
];
TabbedGridComponent.propDecorators = {
    computeTabLabel: [{ type: Input }],
    tableDefinition: [{ type: Input }],
    displayedColumns: [{ type: Input }],
    detailsTemplate: [{ type: ContentChild, args: ['detailsTemplate',] }],
    customTemplateDirectives: [{ type: ContentChildren, args: [CustomTemplateDirective,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    tableData: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdessoAngularLibModule {
}
AdessoAngularLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatSortModule,
                    MatTabsModule,
                    MatTableModule,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ColumnType = {
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

export { AdessoAngularLibModule, TabbedGridComponent, ColumnType, CustomTemplateDirective as ɵa, InputVerifierService as ɵb };

//# sourceMappingURL=adesso-grid-lib.js.map