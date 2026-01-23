import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  imports: [...SharedModules, RouterLink],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

}
