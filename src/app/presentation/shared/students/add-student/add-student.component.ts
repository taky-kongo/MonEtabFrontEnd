import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

interface Genre {
  value: string;
  viewValue: string;
}

interface Classe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-student',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit{
  formStudent!: FormGroup;
  private router = inject(Router);
  genre: Genre[] = [
    {value: 'homme', viewValue: 'Homme'},
    {value: 'femme', viewValue: 'Femme'},
  ];
  classe: Classe[] = [
    {value: '6ème', viewValue: '6ème'},
    {value: '5ème', viewValue: '5ème'},
    {value: '4ème', viewValue: '4ème'},
    {value: '3ème', viewValue: '3ème'},
    {value: '2nde', viewValue: '2nde'},
    {value: '1ère', viewValue: '1ère'},
    {value: 'Tle', viewValue: 'Tle'},
  ];

  ngOnInit(): void {
    this.formStudent = new FormGroup({
      name: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      genre: new FormControl("", [Validators.required]),
      matricule: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      date_naissance: new FormControl("", [Validators.required]),
      classe: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
    });
  }

  submit() {
    console.log(this.formStudent.value);
  }

  navigateBack() {
    this.router.navigate(['/list-students']);
  }

  isFieldValid(name: string) {
    const formControl = this.formStudent.get(name);
    return formControl?.invalid && (formControl?.touched || formControl?.dirty);
  }
}
