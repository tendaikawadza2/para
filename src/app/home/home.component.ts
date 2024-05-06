import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigateByUrl('/about');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
