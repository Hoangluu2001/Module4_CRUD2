import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {CreateStudentComponent} from "./student/create-student/create-student.component";
import {UpdateStudentComponent} from "./student/update-student/update-student.component";
import {TempalteComponent} from "./tempalte/tempalte.component";

const routes: Routes = [
  {path: "student",component: StudentListComponent },
  {path: "add",component: CreateStudentComponent},
  {path: "edit/:id",component: UpdateStudentComponent},
  {path: "", component:StudentListComponent ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
