import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  onSubmit(): void {
    // Perform login validation here
    this.router.navigate(['/dashboard']);
  }
}
