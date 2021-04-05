import { Component } from '@angular/core';
import {MENU_ITEMS} from './pages/pages-menu';
import {PagesModule} from './pages/pages.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarSaleSite';
  menu = MENU_ITEMS;
}
