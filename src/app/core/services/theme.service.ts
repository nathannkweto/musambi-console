import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal to hold the current state
  isDarkTheme = signal<boolean>(false);

  constructor() {
    // 1. Check if the user previously saved a preference
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      this.isDarkTheme.set(true);
    } else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 2. If no saved preference, check if their OS is in dark mode
      this.isDarkTheme.set(true);
    }

    // 3. This effect runs automatically whenever `isDarkTheme` changes
    effect(() => {
      if (this.isDarkTheme()) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme.update(current => !current);
  }
}
