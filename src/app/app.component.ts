import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Counter } from "./counter/counter";
import { Myevent } from './myevent/myevent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Counter, Myevent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {
  
}
