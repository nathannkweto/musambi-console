import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<div class="mat-app-background h-100"><router-outlet></router-outlet></div>`,
  styles: [`.h-100 { height: 100vh; display: flex; flex-direction: column; }`]
})
export class AppComponent {
  title = 'ims-frontend';
}
