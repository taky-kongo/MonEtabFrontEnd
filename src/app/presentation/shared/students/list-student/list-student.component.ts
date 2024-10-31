import {MatButtonModule} from '@angular/material/button';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, RouterLink, MatIcon],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})
export class ListStudentComponent implements AfterViewInit{

  displayedColumns: string[] = ['nom', 'prenom', 'genre', 'classe', 'matricule', 'age', 'telephone', 'ville', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  nom: string;
  prenom: string;
  genre: string;
  classe: string;
  matricule: string;
  age: number;
  telephone: string;
  ville: string;
  action: [string, string];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'KOFFI', prenom: 'George', genre: 'M', classe: 'Tle', matricule: 'GDJ7GD', age: 17, telephone: '0789984532', ville: 'Bonoua', action: ['Modifier', 'Supprimer']},
  {nom: 'KOUADIO', prenom: 'Jean', genre: 'M', classe: '3ème', matricule: 'GDJ7GD', age: 15, telephone: '0789984532', ville: 'Abidjan', action: ['Modifier', 'Supprimer']},
  {nom: 'KOUAME', prenom: 'Marie', genre: 'F', classe: '6ème', matricule: 'GDJ7GD', age: 12, telephone: '0789984532', ville: 'Yamoussoukro', action: ['Modifier', 'Supprimer']},
];

