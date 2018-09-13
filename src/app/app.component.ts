import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'timezone-app';
  currentTime = Date.now();
  active: string = 'Clear';

  onClick(timezone:string): void {
    // set the time to be current
    this.currentTime = Date.now();
    // set the timezone we want to view
    this.active = timezone;
  }

}
