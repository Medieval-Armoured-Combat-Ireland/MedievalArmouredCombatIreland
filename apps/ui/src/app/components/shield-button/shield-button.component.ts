import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shield-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shield-button.component.html',
  styleUrl: './shield-button.component.scss',
})
export class ShieldButtonComponent {
  faCoffee = faCoffee;
  onClick() {
    console.log('clicked');
  }
}
