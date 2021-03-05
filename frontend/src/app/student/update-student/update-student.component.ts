import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student!: any;
  id!: any;
  filter:any;

  validateForm:any = FormGroup;

  constructor(private service: StudentService,
              private router: Router,
              private route: ActivatedRoute,
              private fb:FormBuilder,
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      position: ['', [Validators.required, Validators.minLength(5)]],
      office: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required]],
      startDate: ['', [Validators.required, Validators.minLength(5)]]
    });


    this.id = this.route.snapshot.params['id'];

    this.student = new Student();

    this.service.getStudent(this.id).subscribe(
      data => {
        this.student = data;
      },error => console.log(error)

    )
  }

  onSubmit() {
    console.log(this.validateForm);
  }


  editStudent(){
    this.service.updateStudent(this.id,this.student).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      },error => console.log(error)
    )
  }
}

