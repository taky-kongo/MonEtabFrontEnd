import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-list-teacher',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, RouterLink, MatIcon],
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.scss'
})
export class ListTeacherComponent implements AfterViewInit{

  displayedColumns: string[] = ['nom', 'prenom', 'matiere', 'vacant', 'age', 'telephone', 'ville', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  nom: string;
  prenom: string;
  matiere: string;
  vacant: boolean;
  age: number;
  telephone: string;
  ville: string;
  action: [string, string];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'KOUAKOU', prenom: 'Gregoire', matiere: 'Math', vacant: true, age: 37, telephone: '0779904532', ville: 'Touba', action: ['Modifier', 'Supprimer']},
  {nom: 'ATA', prenom: 'Flora', matiere: 'Physique', vacant: true, age: 25, telephone: '07809984582', ville: 'Bouaké', action: ['Modifier', 'Supprimer']},
  {nom: 'KONE', prenom: 'Aboubacar', matiere: 'Français', vacant: false, age: 42, telephone: '0186984532', ville: 'Gagnoa', action: ['Modifier', 'Supprimer']},
];

