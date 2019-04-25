/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CustomTemplateDirective } from '../custom-template.directive';
import { InputVerifierService } from '../input-verifier.service';
export class TabbedGridComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWRlc3NvLWdyaWQtbGliLyIsInNvdXJjZXMiOlsibGliL3RhYmJlZC1ncmlkL3RhYmJlZC1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEksT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBUWpFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFjOUIsWUFDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU5wRCxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFckIsdUJBQWtCLEdBQXdDLEVBQUUsQ0FBQztJQUl6RCxDQUFDOzs7O0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQzlELGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pGO1lB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQ3VzdG9tVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi9jdXN0b20tdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5wdXRWZXJpZmllclNlcnZpY2UgfSBmcm9tICcuLi9pbnB1dC12ZXJpZmllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVRhYmxlRGVmaW5pdGlvbiwgSVRhYmxlUm93LCBJVGFibGVUYWIgfSBmcm9tICcuLi9tb2RlbC90YWJiZWQtZ3JpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10YWJiZWQtZ3JpZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmJlZC1ncmlkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJiZWQtZ3JpZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmJlZEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBjb21wdXRlVGFiTGFiZWw6IChkYXRhOiBhbnkpID0+IHN0cmluZztcclxuICBASW5wdXQoKSB0YWJsZURlZmluaXRpb246IElUYWJsZURlZmluaXRpb247XHJcbiAgQElucHV0KCkgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2RldGFpbHNUZW1wbGF0ZScpIGRldGFpbHNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkcmVuKEN1c3RvbVRlbXBsYXRlRGlyZWN0aXZlKSBjdXN0b21UZW1wbGF0ZURpcmVjdGl2ZXM6IFF1ZXJ5TGlzdDxDdXN0b21UZW1wbGF0ZURpcmVjdGl2ZT47XHJcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xyXG5cclxuICB0YWJzOiBJVGFibGVUYWJbXSA9IFtdO1xyXG4gIHNlbGVjdGVkVGFiSW5kZXggPSAwO1xyXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+O1xyXG4gIGN1c3RvbVRlbXBsYXRlUmVmczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGlucHV0VmVyaWZpZXJTZXJ2aWNlOiBJbnB1dFZlcmlmaWVyU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmlucHV0VmVyaWZpZXJTZXJ2aWNlLmFsbEV4aXN0KHRoaXMsICdUYWJiZWRHcmlkQ29tcG9uZW50JywgW1xyXG4gICAgICAnY29tcHV0ZVRhYkxhYmVsJyxcclxuICAgICAgJ3RhYmxlRGVmaW5pdGlvbicsXHJcbiAgICAgICdkZXRhaWxzVGVtcGxhdGUnLFxyXG4gICAgXSk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21UZW1wbGF0ZURpcmVjdGl2ZXMuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZVJlZnNbdC5wcm9wZXJ0eV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBjdXN0b20gdGVtcGxhdGUgZGVmaW5pdGlvbiBmb3VuZCBmb3IgJyArIHQucHJvcGVydHkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlUmVmc1t0LnByb3BlcnR5XSA9IHQudGVtcGxhdGVSZWY7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJvd0NsaWNrKHJvdzogSVRhYmxlUm93KSB7XHJcbiAgICBjb25zdCB0YWJOdW1iZXIgPSB0aGlzLnRhYnMuZmluZEluZGV4KChlKSA9PiBlLnJvdy5pZCA9PT0gcm93LmlkKTtcclxuXHJcbiAgICBpZiAodGFiTnVtYmVyID09PSAtMSkge1xyXG4gICAgICB0aGlzLnRhYnMucHVzaCh7IGxhYmVsOiB0aGlzLmNvbXB1dGVUYWJMYWJlbChyb3cuZGF0YSksIHJvdyB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYkluZGV4ID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJbmRleCA9IHRhYk51bWJlciArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZFRhYkluZGV4IC0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tVGVtcGxhdGUocHJvcGVydHk6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgY3VzdG9tVGVtcGxhdGVSZWYgPSB0aGlzLmN1c3RvbVRlbXBsYXRlUmVmc1twcm9wZXJ0eV07XHJcbiAgICBpZiAoIWN1c3RvbVRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgY3VzdG9tIHRlbXBsYXRlIGRlZmluaXRpb24gZm9yICcgKyBwcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3VzdG9tVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0YWJsZURhdGEoZGF0YTogYW55W10pIHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlkID0gMDtcclxuICAgIGNvbnN0IHJvd3MgPSBkYXRhLm1hcDxJVGFibGVSb3c+KCh2KSA9PiAoeyBkYXRhOiB2LCBpZDogaWQrKyB9KSk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJvd3MpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnRpbmdEYXRhQWNjZXNzb3IgPSAocm93OiBJVGFibGVSb3csIHByb3BlcnR5KSA9PiB7XHJcbiAgICAgIHJldHVybiByb3cuZGF0YVtwcm9wZXJ0eV07XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==