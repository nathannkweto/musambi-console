import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-student-overview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="page-header">
      <h1 style="margin: 0;">SIS Overview</h1>
      <p class="subtitle">Welcome to the Student Information System.</p>
    </div>

    <div class="card-grid">
      <mat-card appearance="outlined" class="metric-card">
        <mat-card-content>
          <div class="metric-header">
            <span class="metric-title">Total Enrolled</span>
            <mat-icon color="primary">school</mat-icon>
          </div>
          <h2 class="metric-value">1,248</h2>
        </mat-card-content>
      </mat-card>

      <mat-card appearance="outlined" class="metric-card">
        <mat-card-content>
          <div class="metric-header">
            <span class="metric-title">Pending Applications</span>
            <mat-icon color="accent">pending_actions</mat-icon>
          </div>
          <h2 class="metric-value">56</h2>
        </mat-card-content>
      </mat-card>

      <mat-card appearance="outlined" class="metric-card">
        <mat-card-content>
          <div class="metric-header">
            <span class="metric-title">Active Courses</span>
            <mat-icon color="warn">menu_book</mat-icon>
          </div>
          <h2 class="metric-value">42</h2>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 24px; }
    .subtitle { color: var(--mat-sys-on-surface-variant); margin-top: 4px; }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }

    .metric-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .metric-title {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--mat-sys-on-surface-variant);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .metric-value {
      font-size: 2.5rem;
      margin: 0;
      font-weight: 400;
    }
  `]
})
export class OverviewComponent {}
