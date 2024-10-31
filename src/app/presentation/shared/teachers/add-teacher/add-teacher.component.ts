import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

interface Genre {
  value: string;
  viewValue: string;
}

interface Matiere {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatError,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatOption,
    MatPrefix,
    MatSelect,
    MatSuffix,
    ReactiveFormsModule,
    MatRadioModule
  ],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent implements OnInit{

  formTeacher!: FormGroup;
  private router = inject(Router);
  genre: Genre[] = [
    {value: 'homme', viewValue: 'Homme'},
    {value: 'femme', viewValue: 'Femme'},
  ];
  matieres: Matiere[] = [
    {value: 'Maths', viewValue: 'Maths'},
    {value: 'Physique', viewValue: 'Physique'},
    {value: 'Eps', viewValue: 'Eps'},
    {value: 'Français', viewValue: 'Français'},
    {value: 'SVT', viewValue: 'SVT'},
    {value: 'Philosophie', viewValue: 'Philosophie'},
    {value: 'Anglais', viewValue: 'Anglais'},
  ];

  ngOnInit(): void {
    this.formTeacher = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      genre: new FormControl("", [Validators.required]),
      age: new FormControl("18", [Validators.required, Validators.min(18), Validators.max(70)]),
      matiere: new FormControl("", [Validators.required]),
      vacant: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
    });
  }

  submit() {
    console.log(this.formTeacher.value);
  }

  navigateBack() {
    this.router.navigate(['/list-teachers']);
  }

  isFieldValid(name: string) {
    const formControl = this.formTeacher.get(name);
    return formControl?.invalid && (formControl?.touched || formControl?.dirty);
  }
}
