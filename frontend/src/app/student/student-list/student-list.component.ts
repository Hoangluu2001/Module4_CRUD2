import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: any;
  filter:any;

  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.studentService.getStudentList().subscribe(
      data => {
        this.students = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteStudent(id: number){
    if(confirm("Bạn Có Chắc Chắn Muốn Xóa " + id)){
      this.studentService.deleteStudent(id).subscribe(
        data => {
          this.loadData();
        },error => console.log(error)
      )
    }
  }

}
