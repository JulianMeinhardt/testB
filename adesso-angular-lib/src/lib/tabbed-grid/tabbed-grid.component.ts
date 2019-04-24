import { AfterViewInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CustomTemplateDirective } from '../custom-template.directive';
import { InputVerifierService } from '../input-verifier.service';
import { ITableDefinition, ITableRow, ITableTab } from '../model/tabbed-grid';

@Component({
  selector: 'lib-tabbed-grid',
  templateUrl: './tabbed-grid.component.html',
  styleUrls: ['./tabbed-grid.component.css']
})
export class TabbedGridComponent implements AfterViewInit {
  @Input() computeTabLabel: (data: any) => string;
  @Input() tableDefinition: ITableDefinition;
  @Input() displayedColumns: string[];

  @ContentChild('detailsTemplate') detailsTemplate: TemplateRef<any>;
  @ContentChildren(CustomTemplateDirective) customTemplateDirectives: QueryList<CustomTemplateDirective>;
  @ViewChild(MatSort) sort: MatSort;

  tabs: ITableTab[] = [];
  selectedTabIndex = 0;
  dataSource: MatTableDataSource<any>;
  customTemplateRefs: { [key: string]: TemplateRef<any> } = {};

  constructor(
    private inputVerifierService: InputVerifierService,
  ) { }

  ngAfterViewInit() {
    this.inputVerifierService.allExist(this, 'TabbedGridComponent', [
      'computeTabLabel',
      'tableDefinition',
      'detailsTemplate',
    ]);

    this.customTemplateDirectives.forEach((t) => {
      if (this.customTemplateRefs[t.property]) {
        throw new Error('Duplicate custom template definition found for ' + t.property);
      }

      this.customTemplateRefs[t.property] = t.templateRef;
    });
  }

  rowClick(row: ITableRow) {
    const tabNumber = this.tabs.findIndex((e) => e.row.id === row.id);

    if (tabNumber === -1) {
      this.tabs.push({ label: this.computeTabLabel(row.data), row });
      this.selectedTabIndex = this.tabs.length;
    } else {
      this.selectedTabIndex = tabNumber + 1;
    }
  }

  closeTab(index: number) {
    this.tabs.splice(index, 1);
    if (index === this.selectedTabIndex - 1) {
      this.selectedTabIndex = 0;
    }
  }

  getCustomTemplate(property: string): TemplateRef<any> {
    const customTemplateRef = this.customTemplateRefs[property];
    if (!customTemplateRef) {
      throw new Error('Could not find custom template definition for ' + property);
    }
    return customTemplateRef;
  }

  @Input()
  set tableData(data: any[]) {
    if (!data) {
      this.dataSource = null;
      return;
    }

    let id = 0;
    const rows = data.map<ITableRow>((v) => ({ data: v, id: id++ }));
    this.dataSource = new MatTableDataSource(rows);
    this.dataSource.sortingDataAccessor = (row: ITableRow, property) => {
      return row.data[property];
    };
    this.dataSource.sort = this.sort;
  }
}
