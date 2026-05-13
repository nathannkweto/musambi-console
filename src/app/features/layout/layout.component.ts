import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-feature-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class FeatureLayoutComponent {
  // Signal to track if the sidebar is shrunk to icon-only mode
  isCollapsed = signal<boolean>(false);

  // Example navigation items (You can eventually pass these in via @Input)
  navItems = [
    { path: 'overview', icon: 'dashboard', label: 'Overview' },
    { path: 'records', icon: 'folder_open', label: 'Records' },
    { path: 'reports', icon: 'analytics', label: 'Reports' },
    { path: 'settings', icon: 'settings', label: 'Settings' }
  ];

  toggleCollapse() {
    this.isCollapsed.update(state => !state);
  }
}
