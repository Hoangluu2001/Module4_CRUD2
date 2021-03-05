import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student!: any;
  filter:any;
  validateForm:any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      position: ['', [Validators.required, Validators.minLength(5)]],
      office: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required]],
      startDate: ['', [Validators.required, Validators.minLength(5)]]
    });


    this.student = new Student();
  }

  onSubmit() {
    console.log(this.validateForm);
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
