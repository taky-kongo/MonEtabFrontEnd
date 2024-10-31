import { Component } from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {MatListItem, MatListSubheaderCssMatStyler, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatDivider,
    MatListSubheaderCssMatStyler,
    MatIcon,
    MatListItem,
    RouterLinkActive,
    RouterLink,
    MatNavList
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
