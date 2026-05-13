import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ActionHeaderComponent } from '../../../shared/components/action-header/action-header.component';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StaffFormModalComponent } from '../components/staff-form-modal/staff-form-modal.component';

import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-staff-directory',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    ActionHeaderComponent,
    DataTableComponent,
    MatDialogModule
  ],
  templateUrl: './staff-directory.component.html'
})
export class StaffDirectoryComponent {

  constructor(private dialog: MatDialog) {}
  private notification = inject(NotificationService);

  // Columns for the Teaching Staff table
  teachingColumns: TableColumn[] = [
    { key: 'staffId', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'department', header: 'Department' },
    { key: 'role', header: 'Role' }
  ];

  // Columns for the Admin Staff table
  adminColumns: TableColumn[] = [
    { key: 'staffId', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'office', header: 'Office' },
    { key: 'role', header: 'Role' }
  ];

  // Mock Data
  teachingData = [
    { staffId: 'T-001', name: 'Dr. Robert Ford', department: 'Computer Science', role: 'Professor' },
    { staffId: 'T-002', name: 'Bernard Lowe', department: 'Engineering', role: 'Associate Professor' }
  ];

  adminData = [
    { staffId: 'A-101', name: 'Theresa Cullen', office: 'Main Admin', role: 'Quality Assurance' },
    { staffId: 'A-102', name: 'Ashley Stubbs', office: 'Security', role: 'Head of Security' }
  ];

  handleSearch(searchTerm: string) {
    console.log('Filtering staff by:', searchTerm);
    // Logic to filter the currently active table will go here
  }

  handleAddStaff() {
    const dialogRef = this.dialog.open(StaffFormModalComponent, {
      width: '600px',
      disableClose: true, // Forces them to click Cancel or Save, preventing accidental clicks outside
      autoFocus: 'first-tabbable'
    });

    // Listen for the result when the modal closes
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form Submitted! Here is the validated data:', result);

        // Temporarily push the data into our mock arrays so you can see it update!
        const newRecord = {
          staffId: 'NEW-' + Math.floor(Math.random() * 1000),
          name: `${result.firstName} ${result.lastName}`,
          role: result.role,
          department: result.department,
          office: result.department // Mapping just for the admin table
        };

        if (result.staffType === 'teaching') {
          this.teachingData = [...this.teachingData, newRecord];
        } else {
          this.adminData = [...this.adminData, newRecord];
        }

        // Trigger the Success Toast!
        this.notification.success(`Successfully added ${result.firstName} ${result.lastName} to the system.`);

      } else {
        // Trigger the Info Toast when the user clicks Cancel
        this.notification.info('Action cancelled.');
      }
    });
  }
}
