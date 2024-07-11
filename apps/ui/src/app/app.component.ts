import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShieldButtonComponent } from './components/shield-button/shield-button.component';

@Component({
  standalone: true,
  imports: [ShieldButtonComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui';
}
