import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  mapPin = faLocationPin;

  toggle(location: string) {
    const div = document.getElementById(location) as HTMLDivElement;
    div.style.display = 'block';
    const otherDivs = document.getElementsByClassName(
      'info'
    ) as HTMLCollectionOf<HTMLDivElement>;
    Array.from(otherDivs).forEach((otherDiv) => {
      if (otherDiv.id !== location) {
        otherDiv.style.display = 'none';
      }
    });
  }
}
