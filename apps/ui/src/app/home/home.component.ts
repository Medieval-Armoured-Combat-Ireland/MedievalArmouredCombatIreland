import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShieldButtonComponent } from '../components/shield-button/shield-button.component';
import { faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import SmokeMachine from '@bijection/smoke';
import { MapComponent } from '../components/map/map.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ShieldButtonComponent,
    FontAwesomeModule,
    MapComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  discordIcon = faDiscord;
  facebookIcon = faFacebook;
  emailIcon = faEnvelope;
  questionMark = faQuestion;
  facebookUrl = 'https://www.facebook.com/Irishcombat';
  discordUrl = 'https://discord.gg/5TTbASAxSz';
  emailUrl = 'mailto:armouredcombatireland@gmail.com';

  ngOnInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 900;
    const party = SmokeMachine(ctx, [178, 153, 110]);

    party.start(); // start animating

    setInterval(function () {
      party.stop(); // stop animating
      const rand = Math.floor(Math.random() * window.innerWidth);
      party.addSmoke(rand, 780, 20);

      for (let i = 0; i < 10; i++) {
        party.step(10); // pretend 10 ms pass and rerender
      }
      party.start();
    }, 1500);
  }
}
