import { Component, signal } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { SharedModules } from './shared/shared-modules';
import { Toolbar } from "./components/toolbar/toolbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...SharedModules, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyApp');

}
