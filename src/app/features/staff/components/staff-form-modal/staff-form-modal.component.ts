import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-staff-form-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './staff-form-modal.component.html',
  styleUrls: ['./staff-form-modal.component.scss']
})
export class StaffFormModalComponent {
  staffForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StaffFormModalComponent>
  ) {
    // Initialize the Reactive Form with strict validation
    this.staffForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      staffType: ['teaching', Validators.required],
      department: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.staffForm.valid) {
      // Pass the form values back to the parent component
      this.dialogRef.close(this.staffForm.value);
    } else {
      // Force validation messages to show if the user clicked submit too early
      this.staffForm.markAllAsTouched();
    }
  }

  onCancel() {
    // Close the dialog without passing any data back
    this.dialogRef.close();
  }
}
