import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../shared/components/data-table/data-table.component';
import {ActionHeaderComponent} from '../../shared/components/action-header/action-header.component';

@Component({
  selector: 'app-student-records',
  standalone: true,
  imports: [CommonModule, DataTableComponent, ActionHeaderComponent],
  template: `
    <app-action-header
      title="Staff Directory"
      subtitle="Manage teaching and administrative staff"
      actionText="Add Staff Member"
      [showSearch]="true"
      searchPlaceholder="Search by name or ID...">
    </app-action-header>

    <app-data-table
      [columns]="studentColumns"
      [data]="studentData">
    </app-data-table>
  `
})
export class RecordsComponent {
  studentColumns: TableColumn[] = [
    { key: 'studentId', header: 'ID' },
    { key: 'name', header: 'Full Name' },
    { key: 'grade', header: 'Grade Level' },
    { key: 'gpa', header: 'GPA' },
    { key: 'status', header: 'Enrollment Status' }
  ];

  studentData = [
    { studentId: 'SIS-901', name: 'Liam Gallagher', grade: 'Sophomore', gpa: '3.4', status: 'Enrolled' },
    { studentId: 'SIS-902', name: 'Noel Gallagher', grade: 'Senior', gpa: '2.8', status: 'Academic Probation' },
    { studentId: 'SIS-903', name: 'Damon Albarn', grade: 'Freshman', gpa: '3.9', status: 'Enrolled' },
    { studentId: 'SIS-904', name: 'Justine Frischmann', grade: 'Junior', gpa: '4.0', status: 'Enrolled' },
    { studentId: 'SIS-905', name: 'Brett Anderson', grade: 'Senior', gpa: '3.1', status: 'Pending Review' },
    { studentId: 'SIS-905', name: 'Brett Anderson', grade: 'Senior', gpa: '3.1', status: 'Pending Review' },
    { studentId: 'SIS-905', name: 'Brett Anderson', grade: 'Senior', gpa: '3.1', status: 'Pending Review' },
  ];
}
