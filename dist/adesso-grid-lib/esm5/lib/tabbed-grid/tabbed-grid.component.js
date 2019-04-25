/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CustomTemplateDirective } from '../custom-template.directive';
import { InputVerifierService } from '../input-verifier.service';
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
        this.customTemplateDirectives.forEach((/**
         * @param {?} t
         * @return {?}
         */
        function (t) {
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
        var tabNumber = this.tabs.findIndex((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.row.id === row.id; }));
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
         */
        function (data) {
            if (!data) {
                this.dataSource = null;
                return;
            }
            /** @type {?} */
            var id = 0;
            /** @type {?} */
            var rows = data.map((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return ({ data: v, id: id++ }); }));
            this.dataSource = new MatTableDataSource(rows);
            this.dataSource.sortingDataAccessor = (/**
             * @param {?} row
             * @param {?} property
             * @return {?}
             */
            function (row, property) {
                return row.data[property];
            });
            this.dataSource.sort = this.sort;
        },
        enumerable: true,
        configurable: true
    });
    TabbedGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-tabbed-grid',
                    template: "<mat-tab-group [(selectedIndex)]=\"selectedTabIndex\">\r\n  <mat-tab label=\"Overview\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"full-width\">\r\n\r\n      <ng-container *ngFor=\"let column of tableDefinition.columns\">\r\n        <ng-container matColumnDef=\"{{ column.property }}\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column.label }}</th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <ng-container *ngIf=\"column.customContent\">\r\n              <ng-container *ngTemplateOutlet=\"getCustomTemplate(column.property); context: { $implicit: row.data }\">\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!column.customContent\">\r\n              <ng-container *ngIf=\"column.type == 'TEXT' || column.type == 'NUMBER'\">\r\n                {{ row.data[column.property] }}\r\n              </ng-container>\r\n              <ng-container *ngIf=\"column.type == 'DATE'\">\r\n                {{ row.data[column.property] | date: 'medium'  }}\r\n              </ng-container>\r\n            </ng-container>\r\n          </td>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"tableDefinition.displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: tableDefinition.displayedColumns\" class=\"table-row\" (click)=\"rowClick(row)\"></tr>\r\n    </table>\r\n  </mat-tab>\r\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\">\r\n    <ng-template mat-tab-label>\r\n      {{ tab.label }}\r\n      <span class=\"close-tab\" (click)=\"closeTab(index)\">X</span>\r\n    </ng-template>\r\n\r\n    <ng-container *ngTemplateOutlet=\"detailsTemplate; context: { $implicit: tab.row.data }\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>",
                    styles: [".full-width{width:100%}.table-row{cursor:pointer}.close-tab{cursor:pointer;color:red;position:absolute;right:10px;top:16px}"]
                }] }
    ];
    /** @nocollapse */
    TabbedGridComponent.ctorParameters = function () { return [
        { type: InputVerifierService }
    ]; };
    TabbedGridComponent.propDecorators = {
        computeTabLabel: [{ type: Input }],
        tableDefinition: [{ type: Input }],
        displayedColumns: [{ type: Input }],
        detailsTemplate: [{ type: ContentChild, args: ['detailsTemplate',] }],
        customTemplateDirectives: [{ type: ContentChildren, args: [CustomTemplateDirective,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }],
        tableData: [{ type: Input }]
    };
    return TabbedGridComponent;
}());
export { TabbedGridComponent };
if (false) {
    /** @type {?} */
    TabbedGridComponent.prototype.computeTabLabel;
    /** @type {?} */
    TabbedGridComponent.prototype.tableDefinition;
    /** @type {?} */
    TabbedGridComponent.prototype.displayedColumns;
    /** @type {?} */
    TabbedGridComponent.prototype.detailsTemplate;
    /** @type {?} */
    TabbedGridComponent.prototype.customTemplateDirectives;
    /** @type {?} */
    TabbedGridComponent.prototype.sort;
    /** @type {?} */
    TabbedGridComponent.prototype.tabs;
    /** @type {?} */
    TabbedGridComponent.prototype.selectedTabIndex;
    /** @type {?} */
    TabbedGridComponent.prototype.dataSource;
    /** @type {?} */
    TabbedGridComponent.prototype.customTemplateRefs;
    /**
     * @type {?}
     * @private
     */
    TabbedGridComponent.prototype.inputVerifierService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWRlc3NvLWdyaWQtbGliLyIsInNvdXJjZXMiOlsibGliL3RhYmJlZC1ncmlkL3RhYmJlZC1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEksT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFO0lBbUJFLDZCQUNVLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnBELFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUVyQix1QkFBa0IsR0FBd0MsRUFBRSxDQUFDO0lBSXpELENBQUM7Ozs7SUFFTCw2Q0FBZTs7O0lBQWY7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQzlELGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ3RDLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakY7WUFFRCxLQUFJLENB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SUFDdkcsbUNBQWtDOztJQUVsQyxtQ0FBdUI7O0lBQ3ZCLCtDQUFxQjs7SUFDckIseUNBQW9DOztJQUNwQyxpREFBNkQ7Ozs7O0lBRzNELG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDdXN0b21UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL2N1c3RvbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dFZlcmlmaWVyU2VydmljZSB9IGZyb20gJy4uL2lucHV0LXZlcmlmaWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJVGFibGVEZWZpbml0aW9uLCBJVGFibGVSb3csIElUYWJsZVRhYiB9IGZyb20gJy4uL21vZGVsL3RhYmJlZC1ncmlkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXRhYmJlZC1ncmlkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiYmVkLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmJlZC1ncmlkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiYmVkR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGNvbXB1dGVUYWJMYWJlbDogKGRhdGE6IGFueSkgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhYmxlRGVmaW5pdGlvbjogSVRhYmxlRGVmaW5pdGlvbjtcclxuICBASW5wdXQoKSBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnZGV0YWlsc1RlbXBsYXRlJykgZGV0YWlsc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ3VzdG9tVGVtcGxhdGVEaXJlY3RpdmUpIGN1c3RvbVRlbXBsYXRlRGlyZWN0aXZlczogUXVlcnlMaXN0PEN1c3RvbVRlbXBsYXRlRGlyZWN0aXZlPjtcclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcblxyXG4gIHRhYnM6IElUYWJsZVRhYltdID0gW107XHJcbiAgc2VsZWN0ZWRUYWJJbmRleCA9IDA7XHJcbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcbiAgY3VzdG9tVGVtcGxhdGVSZWZzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5wdXRWZXJpZmllclNlcnZpY2U6IElucHV0VmVyaWZpZXJTZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5wdXRWZXJpZmllclNlcnZpY2UuYWxsRXhpc3QodGhpcywgJ1RhYmJlZEdyaWRDb21wb25lbnQnLCBbXHJcbiAgICAgICdjb21wdXRlVGFiTGFiZWwnLFxyXG4gICAgICAndGFibGVEZWZpbml0aW9uJyxcclxuICAgICAgJ2RldGFpbHNUZW1wbGF0ZScsXHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbVRlbXBsYXRlRGlyZWN0aXZlcy5mb3JFYWNoKCh0KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmN1c3RvbVRlbXBsYXRlUmVmc1t0LnByb3BlcnR5XSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIGN1c3RvbSB0ZW1wbGF0ZSBkZWZpbml0aW9uIGZvdW5kIGZvciAnICsgdC5wcm9wZXJ0eSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVSZWZzW3QucHJvcGVydHldID0gdC50ZW1wbGF0ZVJlZjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcm93Q2xpY2socm93OiBJVGFibGVSb3cpIHtcclxuICAgIGNvbnN0IHRhYk51bWJlciA9IHRoaXMudGFicy5maW5kSW5kZXgoKGUpID0+IGUucm93LmlkID09PSByb3cuaWQpO1xyXG5cclxuICAgIGlmICh0YWJOdW1iZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMudGFicy5wdXNoKHsgbGFiZWw6IHRoaXMuY29tcHV0ZVRhYkxhYmVsKHJvdy5kYXRhKSwgcm93IH0pO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSW5kZXggPSB0aGlzLnRhYnMubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYkluZGV4ID0gdGFiTnVtYmVyICsgMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnNlbGVjdGVkVGFiSW5kZXggLSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDdXN0b21UZW1wbGF0ZShwcm9wZXJ0eTogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCBjdXN0b21UZW1wbGF0ZVJlZiA9IHRoaXMuY3VzdG9tVGVtcGxhdGVSZWZzW3Byb3BlcnR5XTtcclxuICAgIGlmICghY3VzdG9tVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBjdXN0b20gdGVtcGxhdGUgZGVmaW5pdGlvbiBmb3IgJyArIHByb3BlcnR5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXN0b21UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRhYmxlRGF0YShkYXRhOiBhbnlbXSkge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWQgPSAwO1xyXG4gICAgY29uc3Qgcm93cyA9IGRhdGEubWFwPElUYWJsZVJvdz4oKHYpID0+ICh7IGRhdGE6IHYsIGlkOiBpZCsrIH0pKTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2Uocm93cyk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydGluZ0RhdGFBY2Nlc3NvciA9IChyb3c6IElUYWJsZVJvdywgcHJvcGVydHkpID0+IHtcclxuICAgICAgcmV0dXJuIHJvdy5kYXRhW3Byb3BlcnR5XTtcclxuICAgIH07XHJcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcclxuICB9XHJcbn1cclxuIl19