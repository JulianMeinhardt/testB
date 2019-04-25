export declare enum ColumnType {
    TEXT = "TEXT",
    DATE = "DATE",
    NUMBER = "NUMBER",
    ENUM = "ENUM"
}
export interface ITableColumnDefinition {
    customContent?: boolean;
    label: string;
    property: string;
    type: ColumnType;
}
export interface ITableDefinition {
    columns: ITableColumnDefinition[];
    displayedColumns: string[];
}
export interface ITableRow {
    data: any;
    id: number;
}
export interface ITableTab {
    row: ITableRow;
    label: string;
}
