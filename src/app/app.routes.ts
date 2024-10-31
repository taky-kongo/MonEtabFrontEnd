import { Routes } from '@angular/router';
import {DashboardComponent} from './presentation/shared/dashboard/dashboard.component';
import {AddUserComponent} from './presentation/shared/users/add-user/add-user.component';
import {UpdateUserComponent} from './presentation/shared/users/update-user/update-user.component';
import {ListUserComponent} from './presentation/shared/users/list-user/list-user.component';
import {AddStudentComponent} from './presentation/shared/students/add-student/add-student.component';
import {UpdateStudentComponent} from './presentation/shared/students/update-student/update-student.component';
import {ListStudentComponent} from './presentation/shared/students/list-student/list-student.component';
import {AddTeacherComponent} from './presentation/shared/teachers/add-teacher/add-teacher.component';
import {UpdateTeacherComponent} from './presentation/shared/teachers/update-teacher/update-teacher.component';
import {ListTeacherComponent} from './presentation/shared/teachers/list-teacher/list-teacher.component';

export const routes: Routes = [
  { path : '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path : 'dashboard', component: DashboardComponent },

  { path : 'add-student', component: AddStudentComponent },
  { path : 'update-student', component: UpdateStudentComponent },
  { path : 'list-students', component: ListStudentComponent },

  { path : 'add-teacher', component: AddTeacherComponent },
  { path : 'update-teacher', component: UpdateTeacherComponent },
  { path : 'list-teachers', component: ListTeacherComponent },

  { path : 'add-user', component: AddUserComponent },
  { path : 'update-user', component: UpdateUserComponent },
  { path : 'list-users', component: ListUserComponent },
];
