import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student!: any;
  filter:any;

  constructor(
    private studentService: StudentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.student = new Student();
  }

  addStudent(){
    this.studentService.createStudent(this.student).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
        this.student = new Student();
      },
      error => {
        console.log(error)
      }
    )
  }
}
