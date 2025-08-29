import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-directive',
  imports: [FormsModule,CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {
    title = 'Student Manager';
  showList = true;

  // Student data
  students = [
    { name: 'Anuja', marks: 85 },
    { name: 'Pooja', marks: 42 },
    { name: 'Chetna', marks: 30 }
  ];

  // For [(ngModel)] binding
  newStudentName = '';
  newStudentMarks: number | null = null;

  toggleList() {
    this.showList = !this.showList;
  }

  addStudent() {
    if (this.newStudentName.trim() && this.newStudentMarks !== null) {
      this.students.push({
        name: this.newStudentName.trim(),
        marks: this.newStudentMarks
      });
      this.newStudentName = '';
      this.newStudentMarks = null;
    }
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }

  getMarksColor(marks: number) {
    return marks >= 50 ? 'green' : 'red';
  }
}
