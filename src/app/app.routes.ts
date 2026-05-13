import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // This wraps everything below it
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component')
          .then(m => m.DashboardComponent)
      },

      // ADDED HERE: Lazy loaded SIS feature inside the layout!
      {
        path: 'student',
        loadChildren: () => import('./features/student/student.routes').then(m => m.studentRoutes)
      },

      {
        path: 'staff',
        loadChildren: () => import('./features/staff/staff.routes').then(m => m.staffRoutes)
      },

      // Explicit access denied route
      {
        path: 'access-denied',
        loadComponent: () => import('./core/pages/access-denied/access-denied.component').then(m => m.AccessDeniedComponent)
      },

      // 404 catch MUST be the absolute last child!
      {
        path: '**',
        loadComponent: () => import('./core/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
      }
    ]
  }
];
