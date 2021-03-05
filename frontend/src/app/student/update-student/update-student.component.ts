import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student!: any;
  id!: any;
  filter:any;

  constructor(private service: StudentService,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();

    this.service.getStudent(this.id).subscribe(
      data => {
        this.student = data;
      },error => console.log(error)
    )
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

