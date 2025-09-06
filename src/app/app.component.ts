import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Counter } from "./counter/counter";
import { Myevent } from './myevent/myevent';
import { Flowcontrol } from './flowcontrol/flowcontrol';
import { Writablesignals } from "./writablesignals/writablesignals";
import { Computedsignals } from "./computedsignals/computedsignals";
import { EffectAngular } from "./effect-angular/effect-angular";
import { TwoWayBinding } from "./two-way-binding/two-way-binding";
import { DynamicStyling } from "./dynamic-styling/dynamic-styling";
import { Directive } from "./directive/directive";
import { FormsModule } from '@angular/forms';  
import { BasicForm } from './basic-form/basic-form';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedForm } from "./advanced-form/advanced-form";
import { TemplateDriven } from "./template-driven/template-driven";
import { UserCard } from './user-card/user-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Writablesignals, Computedsignals, EffectAngular, TwoWayBinding, DynamicStyling, Directive, CommonModule, FormsModule, BasicForm, ReactiveFormsModule, AdvancedForm, TemplateDriven, UserCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {
  dynamicUser = {
    name: 'Charlie',
    email: 'charlie@example.com'
  };
}
