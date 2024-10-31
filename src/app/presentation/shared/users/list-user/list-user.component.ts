import {Component, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    MatHeaderCellDef
  ],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  displayedColumns: string[] = ['pseudo', 'dateCreation', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  pseudo: string;
  dateCreation: string;
  action: [string];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pseudo: 'admin', dateCreation: '16/08/2024', action: ['Modifier']},
  {pseudo: 'user2', dateCreation: '19/08/2024', action: ['Modifier']},
  {pseudo: 'user3', dateCreation: '26/08/2024', action: ['Modifier']},
];

