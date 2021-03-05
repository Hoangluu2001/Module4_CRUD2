import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {CreateStudentComponent} from "./student/create-student/create-student.component";
import {UpdateStudentComponent} from "./student/update-student/update-student.component";

const routes: Routes = [
  {path: "",component: StudentListComponent , pathMatch:'full'},
  {path: "add",component: CreateStudentComponent},
  {path: "edit/:id",component: UpdateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
