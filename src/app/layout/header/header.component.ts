import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {ThemeService} from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Receives the mobile state from the parent layout
  @Input() isHandset: boolean | null = false;

  // Emits an event to tell the parent to open/close the drawer
  @Output() toggleSidenav = new EventEmitter<void>();

  // Inject the ThemeService
  themeService = inject(ThemeService);

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
