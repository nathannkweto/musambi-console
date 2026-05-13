import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // Modern Angular injection pattern
  private snackBar = inject(MatSnackBar);

  // Default configuration for all our toasts
  private defaultConfig: MatSnackBarConfig = {
    duration: 4000, // Disappears after 4 seconds
    horizontalPosition: 'right', // Bottom-right corner is standard for desktop apps
    verticalPosition: 'bottom',
  };

  success(message: string) {
    this.snackBar.open(message, 'Close', {
      ...this.defaultConfig,
      panelClass: ['snackbar-success'] // Custom CSS class we will define next
    });
  }

  error(message: string) {
    this.snackBar.open(message, 'Close', {
      ...this.defaultConfig,
      duration: 6000, // Give them a bit more time to read errors
      panelClass: ['snackbar-error']
    });
  }

  info(message: string) {
    this.snackBar.open(message, 'Got it', {
      ...this.defaultConfig,
      panelClass: ['snackbar-info']
    });
  }

  warning(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      ...this.defaultConfig,
      panelClass: ['snackbar-warning']
    });
  }
}
