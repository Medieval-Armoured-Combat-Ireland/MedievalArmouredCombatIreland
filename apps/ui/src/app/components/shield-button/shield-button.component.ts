import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-shield-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shield-button.component.html',
  styleUrl: './shield-button.component.css',
})
export class ShieldButtonComponent {

  onClick(){
    console.log('clicked')
  }
}
