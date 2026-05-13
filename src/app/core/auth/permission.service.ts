import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  // Using an Angular Signal to hold the current user's permissions.
  // When a user logs in, you will update this list.
  currentUserPermissions = signal<string[]>([]);

  /**
   * Checks if the user has the required permission(s).
   * Supports checking a single string or an array of strings.
   */
  hasPermission(requiredPermission: string | string[]): boolean {
    const permissions = this.currentUserPermissions();

    if (Array.isArray(requiredPermission)) {
      // Return true if the user has AT LEAST ONE of the required permissions
      return requiredPermission.some(p => permissions.includes(p));
    }

    return permissions.includes(requiredPermission);
  }

  // Helper to set permissions on login
  setPermissions(permissions: string[]) {
    this.currentUserPermissions.set(permissions);
  }
}
