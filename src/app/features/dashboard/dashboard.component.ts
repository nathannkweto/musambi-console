import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <div style="padding: 24px;">
      <h2 style="margin-top: 0;">Recent Enrollments (UI Preview)</h2>

      <app-data-table
        [columns]="myColumns"
        [data]="myMockData">
      </app-data-table>
    </div>
  `
})
export class DashboardComponent {
  // Define what the columns should say
  myColumns: TableColumn[] = [
    { key: 'id', header: 'Student ID' },
    { key: 'name', header: 'Full Name' },
    { key: 'course', header: 'Enrolled Course' },
    { key: 'status', header: 'Status' }
  ];

  // Hardcoded UI data to bypass auth/backend requirements
  myMockData = [
    { id: '1001', name: 'Alice Smith', course: 'Computer Science', status: 'Active' },
    { id: '1002', name: 'Bob Johnson', course: 'Mathematics', status: 'Pending' },
    { id: '1003', name: 'Charlie Brown', course: 'Physics', status: 'Active' },
    { id: '1004', name: 'Diana Prince', course: 'History', status: 'Graduated' },
    { id: '1005', name: 'Evan Wright', course: 'Biology', status: 'Active' },
  ];
}
