import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-part04';
  buttonStatus: string = 'Normal';

  sendStatus(status: string) {
    this.buttonStatus = status;
  }
}
