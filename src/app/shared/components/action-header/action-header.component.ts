import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-action-header',
  standalone: true,
  // Bring in the Material modules needed for the search input and buttons
  imports: [CommonModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent {
  // Text details
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;

  // Button details (If no actionText is provided, the button won't render)
  @Input() actionText?: string;
  @Input() actionIcon: string = 'add';

  // Search details
  @Input() showSearch: boolean = false;
  @Input() searchPlaceholder: string = 'Search...';

  // Events emitted back to the parent page
  @Output() actionClick = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();

  // Capture keystrokes in the search box and emit them up
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
