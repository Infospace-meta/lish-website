import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [WrapperComponent],
  standalone: true,
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'web';
}
