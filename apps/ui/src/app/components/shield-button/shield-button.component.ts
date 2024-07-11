import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-shield-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shield-button.component.html',
  styleUrl: './shield-button.component.scss',
})
export class ShieldButtonComponent {
  // Fall back to facebook
  @Input() icon: IconDefinition = faFacebook;
  @Input() url = 'https://www.facebook.com/Irishcombat';
  onClick() {
    window.open(this.url, '_blank');
  }
}
