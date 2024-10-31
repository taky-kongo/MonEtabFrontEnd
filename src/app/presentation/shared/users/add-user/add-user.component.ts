import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatLabel, MatPrefix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatPrefix,
    MatRadioButton,
    MatRadioGroup,
    MatSelect,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit{
  formUser!: FormGroup;
  private router = inject(Router);

  ngOnInit(): void {
    this.formUser = new FormGroup({
      pseudo: new FormControl("", [Validators.required]),
      motDePasse: new FormControl("", [Validators.required]),
      confirmerMotDePasse: new FormControl("", [Validators.required])
    });
  }

  submit() {
    console.log(this.formUser.value);
  }

  navigateBack() {
    this.router.navigate(['/list-users']);
  }

  isFieldValid(name: string) {
    const formControl = this.formUser.get(name);
    return formControl?.invalid && (formControl?.touched || formControl?.dirty);
  }
}
