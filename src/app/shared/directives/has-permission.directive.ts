import { Directive, Input, TemplateRef, ViewContainerRef, effect, inject } from '@angular/core';
import { PermissionService } from '../../core/auth/permission.service';

@Directive({
  selector: '[hasPermission]',
  standalone: true
})
export class HasPermissionDirective {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private permissionService = inject(PermissionService);

  private requiredPermission: string | string[] = [];

  constructor() {
    // An effect automatically re-runs if the user's permissions signal changes
    // (e.g., if a root user upgrades their subscription mid-session)
    effect(() => {
      this.updateDOM(this.permissionService.currentUserPermissions());
    });
  }

  @Input() set hasPermission(permission: string | string[]) {
    this.requiredPermission = permission;
    this.updateDOM(this.permissionService.currentUserPermissions());
  }

  private updateDOM(currentPermissions: string[]) {
    const hasAccess = this.permissionService.hasPermission(this.requiredPermission);

    if (hasAccess && this.viewContainer.length === 0) {
      // They have permission, and the element isn't in the DOM yet. Render it.
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!hasAccess && this.viewContainer.length > 0) {
      // They don't have permission, but the element is in the DOM. Destroy it.
      this.viewContainer.clear();
    }
  }
}
