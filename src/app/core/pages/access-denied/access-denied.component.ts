import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule],
  template: `
    <div class="error-container">
      <mat-icon color="warn" class="error-icon">gpp_bad</mat-icon>
      <h1 class="error-title">Access Denied</h1>
      <p class="error-message">
        You do not have the required permissions to view this module. <br>
        If you believe this is a mistake, please contact your institution administrator.
      </p>
      <button mat-flat-button routerLink="/dashboard">Return to Dashboard</button>
    </div>
  `,
  styles: [`
    .error-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }
    .error-icon {
      font-size: 80px;
      height: 80px;
      width: 80px;
      margin-bottom: 24px;
      opacity: 0.9;
    }
    .error-title {
      margin: 0 0 16px 0;
      font-size: 2rem;
      font-weight: 500;
    }
    .error-message {
      margin: 0 0 32px 0;
      font-size: 1rem;
      color: var(--mat-sys-on-surface-variant); /* Uses Material 3 subtle text color */
      line-height: 1.5;
    }
  `]
})
export class AccessDeniedComponent {}
