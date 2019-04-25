import { AfterViewInit, QueryList, TemplateRef } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CustomTemplateDirective } from '../custom-template.directive';
import { InputVerifierService } from '../input-verifier.service';
import { ITableDefinition, ITableRow, ITableTab } from '../model/tabbed-grid';
export declare class TabbedGridComponent implements AfterViewInit {
    private inputVerifierService;
    computeTabLabel: (data: any) => string;
    tableDefinition: ITableDefinition;
    displayedColumns: string[];
    detailsTemplate: TemplateRef<any>;
    customTemplateDirectives: QueryList<CustomTemplateDirective>;
    sort: MatSort;
    tabs: ITableTab[];
    selectedTabIndex: number;
    dataSource: MatTableDataSource<any>;
    customTemplateRefs: {
        [key: string]: TemplateRef<any>;
    };
    constructor(inputVerifierService: InputVerifierService);
    ngAfterViewInit(): void;
    rowClick(row: ITableRow): void;
    closeTab(index: number): void;
    getCustomTemplate(property: string): TemplateRef<any>;
    tableData: any[];
}
