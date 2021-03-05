import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = "http://127.0.0.1:8000/api/students";

  constructor(private http: HttpClient) { }

  getStudentList(){
    return this.http.get(`${this.baseUrl}`);
  }

  createStudent(value: any){
    return this.http.post(`${this.baseUrl}`,value);
  }

  updateStudent(id: number,value: any){
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getStudent(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteStudent(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

