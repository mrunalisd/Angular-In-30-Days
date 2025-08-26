import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Counter } from "./counter/counter";
import { Myevent } from './myevent/myevent';
import { Flowcontrol } from './flowcontrol/flowcontrol';
import { Writablesignals } from "./writablesignals/writablesignals";
import { Computedsignals } from "./computedsignals/computedsignals";
import { EffectAngular } from "./effect-angular/effect-angular";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Writablesignals, Computedsignals, EffectAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {
  
}
