import { Routes } from '@angular/router';
import { FeatureLayoutComponent } from '../layout/layout.component';

export const staffRoutes: Routes = [
  {
    path: '',
    component: FeatureLayoutComponent, // 1. Load the inner rail sidebar layout
    children: [
      { path: '', redirectTo: 'directory', pathMatch: 'full' },

      // 2. Load the actual page content inside the rail layout
      {
        path: 'directory',
        loadComponent: () => import('./staff-directory/staff-directory.component').then(m => m.StaffDirectoryComponent)
      },
      // Temporary fallbacks for the other nav items so we don't get 404s while clicking around
      { path: 'reports', loadComponent: () => import('../../core/pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
      { path: 'settings', loadComponent: () => import('../../core/pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
    ]
  }
];
